const SQL_JS_URL = "https://sql.js.org/dist/sql-wasm.js";
const SQL_WASM_BASE = "https://sql.js.org/dist/";
const MAX_ROWS = 100;

let SQL;
let db;

function stripCommentsAndStrings(sql) {
  return sql
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/--.*$/gm, " ")
    .replace(/'(?:''|[^'])*'/g, "''")
    .replace(/"(?:[^"]|"")*"/g, '""')
    .replace(/`(?:[^`]|``)*`/g, "``")
    .replace(/\[(?:[^\]])*\]/g, "[]");
}

function validateReadOnly(sql) {
  const trimmed = sql.trim();
  if (!trimmed) {
    throw new Error("Escreva uma consulta antes de executar.");
  }

  if (trimmed.length > 5000) {
    throw new Error("Consulta muito longa para o laboratório. Reduza e tente de novo.");
  }

  const cleaned = stripCommentsAndStrings(trimmed).trim();
  const withoutTrailingSemicolon = cleaned.replace(/;+[\s\r\n]*$/g, "");

  if (withoutTrailingSemicolon.includes(";")) {
    throw new Error("Execute apenas uma consulta por vez.");
  }

  if (!/^(select|with)\b/i.test(withoutTrailingSemicolon)) {
    throw new Error("Por segurança, este laboratório aceita apenas SELECT ou WITH.");
  }

  const blocked =
    /\b(attach|detach|pragma|vacuum|create|drop|alter|insert|update|delete|replace|reindex|analyze|begin|commit|rollback|savepoint|release|load_extension)\b/i;
  if (blocked.test(withoutTrailingSemicolon)) {
    throw new Error("Comando bloqueado. Use apenas consultas de leitura.");
  }
}

async function loadSeed() {
  const response = await fetch("empresa-seed.sql", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Nao foi possivel carregar a base de estudo.");
  }
  return response.text();
}

async function createDatabase() {
  if (!SQL) {
    importScripts(SQL_JS_URL);
    SQL = await initSqlJs({
      locateFile: (file) => `${SQL_WASM_BASE}${file}`,
    });
  }

  if (db) {
    db.close();
  }

  db = new SQL.Database();
  db.run(await loadSeed());
}

function getTableCounts() {
  const result = db.exec(`
    SELECT 'departamentos' AS tabela, COUNT(*) AS registros FROM departamentos
    UNION ALL SELECT 'funcionarios', COUNT(*) FROM funcionarios
    UNION ALL SELECT 'clientes', COUNT(*) FROM clientes
    UNION ALL SELECT 'produtos', COUNT(*) FROM produtos
    UNION ALL SELECT 'pedidos', COUNT(*) FROM pedidos
    UNION ALL SELECT 'itens_pedido', COUNT(*) FROM itens_pedido
  `);

  return result[0].values.map(([table, count]) => ({ table, count }));
}

function runQuery(sql) {
  validateReadOnly(sql);
  const startedAt = performance.now();
  const results = db.exec(sql);
  const elapsedMs = Math.round(performance.now() - startedAt);

  return results.map((result) => ({
    columns: result.columns,
    rows: result.values.slice(0, MAX_ROWS),
    rowCount: result.values.length,
    truncated: result.values.length > MAX_ROWS,
    elapsedMs,
  }));
}

self.onmessage = async (event) => {
  const { id, type, sql } = event.data;

  try {
    if (type === "init" || type === "reset") {
      await createDatabase();
      self.postMessage({ id, type: "ready", counts: getTableCounts() });
      return;
    }

    if (type === "run") {
      if (!db) {
        await createDatabase();
      }
      self.postMessage({ id, type: "result", results: runQuery(sql) });
    }
  } catch (error) {
    self.postMessage({
      id,
      type: "error",
      message: error.message || "Erro ao executar a consulta.",
    });
  }
};
