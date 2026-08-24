const notionSources = [
  {
    title: "Trilha Completa - Analista Junior de BI",
    url: "https://app.notion.com/p/3a5a46b116fe81b2b304f07dba6fcb26",
  },
  {
    title: "Modulo 3 - SQL para Analise de Dados",
    url: "https://app.notion.com/p/3a5a46b116fe81b8be2bca6fa7e9eab7",
  },
  {
    title: "Materiais - SQL",
    url: "https://app.notion.com/p/3b4a46b116fe81ba9fceeb3643d38e97",
  },
  {
    title: "Central de materiais e arquivos de pratica",
    url: "https://app.notion.com/p/3b4a46b116fe8189a7bde03e40146abe",
  },
];

const tables = [
  ["departamentos", "Areas internas, cidades e relacionamento com funcionarios."],
  ["funcionarios", "Cargos, salarios, datas de admissao e departamento."],
  ["clientes", "Segmentos B2B/B2C, cidades e estados."],
  ["pedidos", "Compra, data, cliente e status operacional."],
  ["itens_pedido", "Produtos, quantidades, preco unitario e total por item."],
  ["produtos", "Catalogo, categoria, preco e custo para margem."],
];

const levels = [
  {
    id: "nivel-1",
    title: "Nivel 1",
    focus: "SELECT, WHERE, ORDER BY, LIMIT",
    file: "exercicios/nivel_1_basico.sql",
    answer: "respostas/gabarito_nivel_1.sql",
    notion: "Fundamentos",
    exercises: [
      "Funcionarios ordenados por salario",
      "Funcionarios do departamento Tecnologia",
      "Produtos acima de R$ 1.000",
      "Cinco produtos mais baratos",
      "Clientes do estado de SP",
      "Pedidos cancelados",
      "Salarios entre R$ 7.000 e R$ 10.000",
      "Produtos de Hardware ou Mobiliario",
      "Funcionarios admitidos apos 01/01/2022",
      "Clientes com nome iniciado por E ou terminado em Ltda",
    ],
  },
  {
    id: "nivel-2",
    title: "Nivel 2",
    focus: "GROUP BY, HAVING, JOIN",
    file: "exercicios/nivel_2_group_join.sql",
    answer: "respostas/gabarito_nivel_2.sql",
    notion: "Agregacoes e relacionamentos",
    exercises: [
      "Funcionarios por departamento",
      "Salario medio, minimo e maximo por departamento",
      "Departamentos com mais de 2 funcionarios",
      "Pedidos com nome do cliente",
      "Itens de pedido com produto",
      "Valor total de cada pedido",
      "Receita por categoria",
      "Clientes com mais de 2 pedidos",
      "Funcionarios por departamento e cidade",
      "Receita por mes",
    ],
  },
  {
    id: "nivel-3",
    title: "Nivel 3",
    focus: "Subqueries, CTEs e window functions",
    file: "exercicios/nivel_3_avancado.sql",
    answer: "respostas/gabarito_nivel_3.sql",
    notion: "Logica analitica e janelas",
    exercises: [
      "Funcionarios acima da media salarial",
      "Produtos nunca vendidos",
      "Maior salario por departamento",
      "Receita mensal com variacao por LAG",
      "Top 5 clientes por ticket medio",
      "Ranking salarial por departamento",
      "Pedidos numerados por cliente",
      "Receita acumulada em 2024",
      "Receita, lucro e margem por categoria",
      "Clientes B2B em risco",
    ],
  },
  {
    id: "nivel-4",
    title: "Nivel 4",
    focus: "KPIs e analise de negocio",
    file: "exercicios/nivel_4_kpis_negocio.sql",
    answer: "respostas/gabarito_nivel_4.sql",
    notion: "Metricas, regras e validacao",
    exercises: [
      "Receita, custo e lucro total",
      "Margem por categoria",
      "Cinco clientes com maior receita",
      "Ticket medio por segmento",
      "Distribuicao dos pedidos por status",
      "Receita mensal e ticket medio",
      "Produtos mais vendidos",
      "Produtos nunca vendidos",
      "Clientes com pedidos pendentes",
      "Classificacao de clientes por receita",
    ],
  },
  {
    id: "nivel-5",
    title: "Nivel 5",
    focus: "Projeto final e painel executivo",
    file: "exercicios/nivel_5_projeto_final.sql",
    answer: "respostas/gabarito_nivel_5.sql",
    notion: "Analise completa documentada",
    exercises: [
      "View de vendas detalhadas",
      "Relatorio mensal por pedidos entregues",
      "Ranking de produtos por lucro",
      "RFM simplificado",
      "Classificacao de clientes por recencia",
      "Melhor cliente por estado",
      "Comparativo B2B vs B2C",
      "Produto lider por categoria",
      "Funil mensal de status",
      "Painel executivo em linhas",
    ],
  },
];

const timeline = [
  {
    id: "diag",
    title: "Diagnostico e ambiente",
    text: "Gerar a base SQLite local, confirmar tabelas e abrir o fluxo de pratica.",
    source: "README",
    href: "README.md",
  },
  {
    id: "fundamentos",
    title: "Fundamentos SQL",
    text: "Praticar filtros, ordenacao e leitura de tabelas antes de avancar.",
    source: "Nivel 1",
    href: "exercicios/nivel_1_basico.sql",
  },
  {
    id: "joins",
    title: "Agregacoes e JOINs",
    text: "Conectar tabelas, agrupar resultados e validar a granularidade.",
    source: "Nivel 2",
    href: "exercicios/nivel_2_group_join.sql",
  },
  {
    id: "analitico",
    title: "Consultas analiticas",
    text: "Usar subqueries, CTEs e funcoes de janela para responder perguntas de negocio.",
    source: "Nivel 3",
    href: "exercicios/nivel_3_avancado.sql",
  },
  {
    id: "kpis",
    title: "KPIs de negocio",
    text: "Calcular receita, custo, lucro, margem, ticket medio e classificacoes.",
    source: "Nivel 4",
    href: "exercicios/nivel_4_kpis_negocio.sql",
  },
  {
    id: "portfolio",
    title: "Entrega de portfolio",
    text: "Fechar com views, RFM, ranking e painel executivo versionados no GitHub.",
    source: "Nivel 5",
    href: "exercicios/nivel_5_projeto_final.sql",
  },
];

const state = {
  currentLevel: levels[0].id,
  currentExercise: 0,
  timerSeconds: 25 * 60,
  timerId: null,
  reviewOnly: false,
  visibleHints: 0,
};

const sqlLab = {
  worker: null,
  pending: new Map(),
  ready: false,
  lastRunId: 0,
};

const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

function progressKey(id) {
  return `sql-estudo-progress-${id}`;
}

function notesKey(levelId, exerciseIndex) {
  return `sql-estudo-notes-${levelId}-${exerciseIndex}`;
}

function editorKey(levelId, exerciseIndex) {
  return `sql-estudo-editor-${levelId}-${exerciseIndex}`;
}

function statusKey(levelId, exerciseIndex) {
  return `sql-estudo-status-${levelId}-${exerciseIndex}`;
}

function historyKey(levelId, exerciseIndex) {
  return `sql-estudo-history-${levelId}-${exerciseIndex}`;
}

function hintKey(levelId, exerciseIndex) {
  return `sql-estudo-hints-${levelId}-${exerciseIndex}`;
}

function normalizeText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function normalizeSql(value) {
  return normalizeText(value).replace(/\s+/g, " ");
}

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

function getExerciseGuide(level, exerciseIndex) {
  const title = level.exercises[exerciseIndex] ?? level.exercises[0];
  const text = normalizeText(title);
  const tables = new Set();
  const terms = new Set();
  const hints = [];
  let goal = `Responder a pergunta "${title}" usando ${level.focus}.`;
  let challenge = "Depois de executar, escreva nas anotacoes qual decisao de negocio esse resultado ajudaria a tomar.";
  let allowEmpty = false;
  let maxRows = null;

  if (includesAny(text, ["funcionario", "salario", "departamento"])) tables.add("funcionarios");
  if (includesAny(text, ["departamento"]) && level.id !== "nivel-1") tables.add("departamentos");
  if (includesAny(text, ["cliente", "segmento", "estado", "b2b", "b2c", "rfm"])) tables.add("clientes");
  if (includesAny(text, ["pedido", "status", "mensal", "mes", "receita", "ticket", "compra", "funil"])) tables.add("pedidos");
  if (includesAny(text, ["produto", "categoria", "receita", "lucro", "margem", "vendido", "vendas"])) tables.add("produtos");
  if (includesAny(text, ["item", "receita", "lucro", "custo", "ticket", "vendido", "vendas", "valor total", "produto"])) tables.add("itens_pedido");

  if (level.id !== "nivel-1" && tables.size > 1) terms.add("join");
  if (includesAny(text, ["por ", "cada", "distribuicao", "mensal", "categoria", "segmento", "estado", "departamento"])) terms.add("group by");
  if (includesAny(text, ["mais de 2", "apenas os departamentos"])) terms.add("having");
  if (includesAny(text, ["ordenado", "ordene", "ranking", "top", "maior", "baratos", "lider"])) terms.add("order by");
  if (includesAny(text, ["cinco", "top 5", "5 clientes", "10 produtos"])) {
    maxRows = text.includes("10") ? 10 : 5;
  }
  if (includesAny(text, ["cancelado", "pendente", "entregue", "estado", "hardware", "mobiliario", "apos", "entre", "acima", "comeca", "termina", "b2b"])) terms.add("where");
  if (includesAny(text, ["cte", "rfm", "risco", "acumulada", "variacao"])) terms.add("with");
  if (includesAny(text, ["rank", "ranking", "numere", "acumulada", "lag", "row_number", "lider", "melhor cliente"])) terms.add("over");
  if (includesAny(text, ["mensal", "mes"])) terms.add("strftime");
  if (includesAny(text, ["margem", "ticket", "percentual", "receita", "lucro", "custo"])) terms.add("round");
  if (includesAny(text, ["classifique", "classificacao"])) terms.add("case");
  if (includesAny(text, ["nunca vendidos"])) {
    terms.delete("join");
    terms.add("not");
    allowEmpty = true;
  }
  if (includesAny(text, ["view"])) {
    terms.delete("join");
    terms.add("select");
    goal = "Montar a consulta base de vendas detalhadas. No site, use SELECT ou WITH; a criacao de VIEW fica para o ambiente local.";
  }

  if (tables.size === 0) tables.add("pedidos");
  if (terms.size === 0) terms.add("select");

  hints.push(`Comece pela(s) tabela(s): ${Array.from(tables).join(", ")}.`);
  if (terms.has("join")) hints.push("Defina a chave de ligacao antes de escolher as colunas finais.");
  if (terms.has("group by")) hints.push("Confira se toda coluna sem agregacao tambem aparece no GROUP BY.");
  if (terms.has("where")) hints.push("Separe filtros de linha no WHERE; filtros de grupo ficam no HAVING.");
  if (terms.has("over")) hints.push("Use OVER para ranking, numeracao, acumulado ou comparacao com linha anterior.");
  if (terms.has("case")) hints.push("Transforme as faixas de negocio em regras CASE bem explicitas.");
  if (maxRows) hints.push(`Limite o resultado a ${maxRows} linha(s) depois de ordenar pelo indicador principal.`);
  while (hints.length < 3) {
    hints.push("Depois de executar, valide se a quantidade de linhas combina com a pergunta.");
  }

  if (includesAny(text, ["receita", "lucro", "margem", "ticket"])) {
    challenge = "Interprete se esse indicador aponta crescimento, eficiencia, cliente prioritario ou risco comercial.";
  } else if (includesAny(text, ["status", "pendente", "cancelado", "funil"])) {
    challenge = "Use o resultado para pensar em gargalos operacionais e qualidade dos pedidos.";
  } else if (includesAny(text, ["cliente", "segmento", "estado"])) {
    challenge = "Compare o comportamento por cliente, segmento ou regiao antes de tirar conclusoes.";
  } else if (includesAny(text, ["funcionario", "departamento", "salario"])) {
    challenge = "Leia o resultado como um diagnostico interno de area, distribuicao ou senioridade.";
  }

  return {
    goal,
    hints: hints.slice(0, 4),
    challenge,
    checks: {
      tables: Array.from(tables),
      terms: Array.from(terms),
      allowEmpty,
      maxRows,
    },
  };
}

function getCurrentLevel() {
  return levels.find((level) => level.id === state.currentLevel) ?? levels[0];
}

function getStarterSql(level, exerciseIndex) {
  const exercise = level.exercises[exerciseIndex] ?? level.exercises[0];
  const starters = {
    "nivel-1": [
      "SELECT\n  -- colunas\nFROM funcionarios\n-- ORDER BY coluna DESC;",
      "SELECT\n  -- colunas\nFROM funcionarios\n-- WHERE departamento_id = ?;",
      "SELECT\n  -- colunas\nFROM produtos\n-- WHERE preco > ?;",
      "SELECT\n  -- colunas\nFROM produtos\n-- ORDER BY coluna ASC\n-- LIMIT ?;",
      "SELECT\n  -- colunas\nFROM clientes\n-- WHERE estado = ?;",
    ],
    "nivel-2": [
      "SELECT\n  d.nome,\n  COUNT(*) AS total\nFROM funcionarios f\nJOIN departamentos d ON d.id = f.departamento_id\nGROUP BY d.nome;",
      "SELECT\n  d.nome,\n  -- agregacoes de salario\nFROM funcionarios f\nJOIN departamentos d ON d.id = f.departamento_id\nGROUP BY d.nome;",
      "SELECT\n  d.nome,\n  COUNT(*) AS total\nFROM funcionarios f\nJOIN departamentos d ON d.id = f.departamento_id\nGROUP BY d.nome\n-- HAVING COUNT(*) > ?;",
    ],
    "nivel-3": [
      "SELECT nome, cargo, salario\nFROM funcionarios\nWHERE salario > (\n  SELECT AVG(salario)\n  FROM funcionarios\n);",
      "SELECT p.nome, p.categoria\nFROM produtos p\nWHERE p.id NOT IN (\n  SELECT produto_id\n  FROM itens_pedido\n);",
      "SELECT d.nome AS departamento,\n       f.nome AS funcionario,\n       f.salario\nFROM funcionarios f\nJOIN departamentos d ON d.id = f.departamento_id\n-- complete a subquery correlacionada aqui;",
    ],
    "nivel-4": [
      "SELECT\n  -- receita = quantidade * preco_unit\n  -- custo = quantidade * custo\n  -- lucro = receita - custo\nFROM pedidos p\nJOIN itens_pedido ip ON ip.pedido_id = p.id\nJOIN produtos pr ON pr.id = ip.produto_id\nWHERE p.status = 'Entregue';",
      "SELECT\n  pr.categoria,\n  -- receita, lucro e margem\nFROM pedidos p\nJOIN itens_pedido ip ON ip.pedido_id = p.id\nJOIN produtos pr ON pr.id = ip.produto_id\nWHERE p.status = 'Entregue'\nGROUP BY pr.categoria;",
    ],
    "nivel-5": [
      "SELECT\n  p.id AS pedido_id,\n  p.data,\n  p.status,\n  c.nome AS cliente,\n  pr.nome AS produto\nFROM pedidos p\nJOIN clientes c ON c.id = p.cliente_id\nJOIN itens_pedido ip ON ip.pedido_id = p.id\nJOIN produtos pr ON pr.id = ip.produto_id\nLIMIT 20;",
    ],
  };

  const levelStarters = starters[level.id] ?? [];
  return (
    levelStarters[exerciseIndex] ??
    `-- ${level.title}: ${exercise}\n-- Escreva sua consulta de leitura abaixo.\n\nSELECT *\nFROM pedidos\nLIMIT 10;`
  );
}

function renderTimeline() {
  const container = document.querySelector("#timeline");
  if (!container) return;
  container.innerHTML = "";

  timeline.forEach((step) => {
    const done = storage.get(progressKey(step.id), false);
    const row = document.createElement("div");
    row.className = `step-row${done ? " done" : ""}`;
    row.innerHTML = `
      <input class="step-check" type="checkbox" ${done ? "checked" : ""} aria-label="Concluir ${step.title}">
      <div>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      </div>
      <a class="source-link" href="${step.href}">${step.source}</a>
    `;

    row.querySelector("input").addEventListener("change", (event) => {
      storage.set(progressKey(step.id), event.target.checked);
      renderTimeline();
      renderStudyMap();
    });

    container.appendChild(row);
  });
}

function renderStudyMap() {
  const container = document.querySelector("#study-map");
  if (!container) return;

  container.innerHTML = timeline
    .map((step, index) => {
      const done = storage.get(progressKey(step.id), false);
      const current = !done && timeline.slice(0, index).every((item) => storage.get(progressKey(item.id), false));
      return `
        <div class="map-step ${done ? "done" : ""} ${current ? "current" : ""}">
          <span>${index + 1}</span>
          <div>
            <strong>${step.title}</strong>
            <p>${step.text}</p>
          </div>
        </div>
      `;
    })
    .join("");
}

function exerciseDescription(level, exerciseIndex) {
  const total = level.exercises.length;
  return `Exercicio ${exerciseIndex + 1} de ${total}: ${level.exercises[exerciseIndex]}. Foco: ${level.focus}. Antes de abrir o gabarito, registre a tentativa e a validacao.`;
}

function getExerciseStatus(levelId, exerciseIndex) {
  return storage.get(statusKey(levelId, exerciseIndex), {
    status: "not-started",
    score: 0,
    label: "Nao iniciado",
  });
}

function getAllExerciseStatuses() {
  return levels.flatMap((level) =>
    level.exercises.map((exercise, index) => ({
      level,
      exercise,
      index,
      status: getExerciseStatus(level.id, index),
      attempted: storage.get(progressKey(`${level.id}-${index}`), false),
    })),
  );
}

function renderLabStats() {
  const container = document.querySelector("#lab-stats");
  if (!container) return;
  const all = getAllExerciseStatuses();
  const completed = all.filter((item) => item.status.status === "correct").length;
  const almost = all.filter((item) => item.status.status === "almost").length;
  const review = all.filter((item) => item.status.status === "review").length;
  const attempted = all.filter((item) => item.attempted || item.status.status !== "not-started").length;

  container.innerHTML = `
    <span><strong>${completed}</strong> ok</span>
    <span><strong>${almost}</strong> quase</span>
    <span><strong>${review}</strong> revisar</span>
    <span><strong>${attempted}</strong> tentativas</span>
  `;
}

function renderLevelTabs() {
  const container = document.querySelector("#level-tabs");
  const search = document.querySelector("#exercise-search");
  if (!container || !search) return;
  const query = search.value.trim().toLowerCase();
  container.innerHTML = "";

  levels.forEach((level) => {
    const matches =
      !query ||
      level.title.toLowerCase().includes(query) ||
      level.focus.toLowerCase().includes(query) ||
      level.exercises.some((exercise) => exercise.toLowerCase().includes(query));

    if (!matches) return;

    const button = document.createElement("button");
    button.className = `level-tab${level.id === state.currentLevel ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <strong>${level.title}</strong>
      <span>${level.focus}</span>
      <span>${level.notion}</span>
    `;
    button.addEventListener("click", () => {
      state.currentLevel = level.id;
      state.currentExercise = 0;
      renderLevelTabs();
      renderExerciseList();
      renderExercise();
    });
    container.appendChild(button);
  });
}

function renderExerciseList() {
  const level = getCurrentLevel();
  const search = document.querySelector("#exercise-search");
  const container = document.querySelector("#exercise-list");
  if (!container || !search) return;
  const query = search.value.trim().toLowerCase();
  container.innerHTML = "";

  level.exercises.forEach((exercise, index) => {
    if (query && !exercise.toLowerCase().includes(query) && !level.focus.toLowerCase().includes(query)) {
      return;
    }

    const attempted = storage.get(progressKey(`${level.id}-${index}`), false);
    const status = getExerciseStatus(level.id, index);
    if (state.reviewOnly && status.status === "correct") {
      return;
    }

    const button = document.createElement("button");
    button.className = [
      "exercise-item",
      index === state.currentExercise ? "active" : "",
      attempted ? "done" : "",
      `status-${status.status}`,
    ]
      .filter(Boolean)
      .join(" ");
    button.type = "button";
    button.innerHTML = `
      <span>${index + 1}</span>
      <span>${exercise}<small>${status.label}</small></span>
    `;
    button.addEventListener("click", () => {
      state.currentExercise = index;
      state.visibleHints = storage.get(hintKey(level.id, state.currentExercise), 0);
      renderExerciseList();
      renderExercise();
    });
    container.appendChild(button);
  });

  if (!container.children.length) {
    container.innerHTML = `<div class="empty-list">Nenhum exercicio encontrado neste filtro.</div>`;
  }
}

function renderExercise() {
  if (!document.querySelector("#exercise-title")) return;
  const level = getCurrentLevel();
  const title = level.exercises[state.currentExercise] ?? level.exercises[0];
  state.visibleHints = storage.get(hintKey(level.id, state.currentExercise), 0);
  const attempted = storage.get(
    progressKey(`${level.id}-${state.currentExercise}`),
    false,
  );

  document.querySelector("#exercise-level").textContent = `${level.title} / ${level.notion}`;
  document.querySelector("#exercise-title").textContent = title;
  document.querySelector("#exercise-description").textContent = exerciseDescription(
    level,
    state.currentExercise,
  );

  const exerciseFile = document.querySelector("#exercise-file");
  exerciseFile.href = level.file;

  const answerFile = document.querySelector("#answer-file");
  answerFile.href = level.answer;
  answerFile.classList.toggle("disabled-link", !attempted);
  answerFile.setAttribute("aria-disabled", String(!attempted));

  const check = document.querySelector("#attempt-check");
  check.checked = attempted;

  const notes = document.querySelector("#exercise-notes");
  notes.value = storage.get(notesKey(level.id, state.currentExercise), "");

  renderSqlEditor();
  renderExerciseAssist();
  renderAttemptHistory();
  renderLabStats();
  renderReviewToggle();
}

function renderExerciseAssist() {
  const goal = document.querySelector("#exercise-goal");
  const hints = document.querySelector("#exercise-hints");
  const challenge = document.querySelector("#bi-challenge");
  const validation = document.querySelector("#sql-validation");
  const insight = document.querySelector("#sql-insight");
  if (!goal || !hints || !challenge) return;

  const level = getCurrentLevel();
  const guide = getExerciseGuide(level, state.currentExercise);
  goal.textContent = guide.goal;
  challenge.textContent = guide.challenge;
  hints.innerHTML = guide.hints
    .map((hint, index) => `<li class="${index < state.visibleHints ? "visible" : ""}">${hint}</li>`)
    .join("");

  if (validation) {
    const status = getExerciseStatus(level.id, state.currentExercise);
    validation.innerHTML =
      status.status === "not-started"
        ? ""
        : `<div class="validation-card status-${status.status}">
            <strong>${status.label}</strong>
            <span>${status.score}% de aderencia aos criterios do exercicio.</span>
          </div>`;
  }
  if (insight) insight.textContent = "";
}

function renderReviewToggle() {
  const button = document.querySelector("#review-mode-toggle");
  if (!button) return;
  button.textContent = state.reviewOnly ? "Ver todos" : "Revisar pendencias";
  button.classList.toggle("active-filter", state.reviewOnly);
}

function renderAttemptHistory() {
  const container = document.querySelector("#attempt-history-list");
  if (!container) return;
  const level = getCurrentLevel();
  const history = storage.get(historyKey(level.id, state.currentExercise), []);

  if (!history.length) {
    container.innerHTML = `<div class="empty-list">As execucoes deste exercicio aparecerao aqui.</div>`;
    return;
  }

  container.innerHTML = history
    .map(
      (attempt, index) => `
        <div class="attempt-row status-${attempt.status}">
          <div>
            <strong>${attempt.label}</strong>
            <span>${attempt.when} - ${attempt.rowText}</span>
          </div>
          <button class="ghost-button restore-attempt" type="button" data-index="${index}">
            Restaurar
          </button>
        </div>
      `,
    )
    .join("");

  container.querySelectorAll(".restore-attempt").forEach((button) => {
    button.addEventListener("click", () => {
      const attempt = history[Number(button.dataset.index)];
      const editor = document.querySelector("#sql-editor");
      if (!attempt || !editor) return;
      editor.value = attempt.sql;
      storage.set(editorKey(level.id, state.currentExercise), attempt.sql);
      setSqlMessage("Tentativa restaurada no editor.");
    });
  });
}

function wireExerciseControls() {
  const attemptCheck = document.querySelector("#attempt-check");
  if (!attemptCheck) return;

  attemptCheck.addEventListener("change", (event) => {
    const level = getCurrentLevel();
    storage.set(progressKey(`${level.id}-${state.currentExercise}`), event.target.checked);
    renderExerciseList();
    renderExercise();
  });

  document.querySelector("#exercise-notes")?.addEventListener("input", (event) => {
    const level = getCurrentLevel();
    storage.set(notesKey(level.id, state.currentExercise), event.target.value);
  });

  document.querySelector("#sql-editor")?.addEventListener("input", (event) => {
    const level = getCurrentLevel();
    storage.set(editorKey(level.id, state.currentExercise), event.target.value);
  });

  document.querySelector("#sql-editor")?.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      runCurrentSql();
    }
  });

  document.querySelector("#run-sql")?.addEventListener("click", runCurrentSql);

  document.querySelector("#load-starter-sql")?.addEventListener("click", () => {
    const level = getCurrentLevel();
    const starter = getStarterSql(level, state.currentExercise);
    document.querySelector("#sql-editor").value = starter;
    storage.set(editorKey(level.id, state.currentExercise), starter);
  });

  document.querySelector("#reset-sql-db")?.addEventListener("click", resetSqlDatabase);

  document.querySelector("#show-next-hint")?.addEventListener("click", () => {
    const level = getCurrentLevel();
    const guide = getExerciseGuide(level, state.currentExercise);
    state.visibleHints = Math.min(guide.hints.length, state.visibleHints + 1);
    storage.set(hintKey(level.id, state.currentExercise), state.visibleHints);
    renderExerciseAssist();
  });

  document.querySelector("#reset-hints")?.addEventListener("click", () => {
    const level = getCurrentLevel();
    state.visibleHints = 0;
    storage.set(hintKey(level.id, state.currentExercise), state.visibleHints);
    renderExerciseAssist();
  });

  document.querySelector("#review-mode-toggle")?.addEventListener("click", () => {
    state.reviewOnly = !state.reviewOnly;
    renderReviewToggle();
    renderLevelTabs();
    renderExerciseList();
  });

  document.querySelector("#clear-attempt-history")?.addEventListener("click", () => {
    const level = getCurrentLevel();
    localStorage.removeItem(historyKey(level.id, state.currentExercise));
    renderAttemptHistory();
  });

  document.querySelector("#exercise-search")?.addEventListener("input", () => {
    renderLevelTabs();
    renderExerciseList();
  });

  document.querySelector("#reset-progress")?.addEventListener("click", () => {
    const keys = Object.keys(localStorage).filter((key) => key.startsWith("sql-estudo-"));
    keys.forEach((key) => localStorage.removeItem(key));
    renderTimeline();
    renderStudyMap();
    renderExerciseList();
    renderExercise();
    renderLabStats();
  });

  document.querySelector("#answer-file")?.addEventListener("click", (event) => {
    if (event.currentTarget.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
    }
  });
}

function formatTimer(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const rest = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${rest}`;
}

function renderTimer() {
  const display = document.querySelector("#timer-display");
  const toggle = document.querySelector("#timer-toggle");
  if (!display || !toggle) return;
  display.textContent = formatTimer(state.timerSeconds);
  toggle.textContent = state.timerId ? "Ⅱ" : "▶";
}

function wireTimer() {
  const toggle = document.querySelector("#timer-toggle");
  const reset = document.querySelector("#timer-reset");
  if (!toggle || !reset) return;

  toggle.addEventListener("click", () => {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
      renderTimer();
      return;
    }

    state.timerId = setInterval(() => {
      state.timerSeconds = Math.max(0, state.timerSeconds - 1);
      if (state.timerSeconds === 0) {
        clearInterval(state.timerId);
        state.timerId = null;
      }
      renderTimer();
    }, 1000);
    renderTimer();
  });

  reset.addEventListener("click", () => {
    clearInterval(state.timerId);
    state.timerId = null;
    state.timerSeconds = 25 * 60;
    renderTimer();
  });
}

function renderReferences() {
  const tableList = document.querySelector("#table-list");
  if (!tableList) return;
  tableList.innerHTML = tables
    .map(([table, description]) => `<li><strong>${table}</strong>: ${description}</li>`)
    .join("");

  const sourceList = document.querySelector("#source-list");
  if (!sourceList) return;
  sourceList.innerHTML = notionSources
    .map((source) => `<li><a href="${source.url}">${source.title}</a></li>`)
    .join("");
}

function renderSqlEditor() {
  const editor = document.querySelector("#sql-editor");
  if (!editor) return;
  const level = getCurrentLevel();
  const key = editorKey(level.id, state.currentExercise);
  const saved = storage.get(key, null);
  editor.value = saved === null ? getStarterSql(level, state.currentExercise) : saved;
}

function setSqlStatus(message, mode = "") {
  const status = document.querySelector("#sql-engine-status");
  if (!status) return;
  status.textContent = message;
  status.className = `status-pill ${mode}`.trim();
}

function setSqlMessage(message, isError = false) {
  const output = document.querySelector("#sql-message");
  if (!output) return;
  output.textContent = message;
  output.classList.toggle("error", isError);
}

function renderSqlEmpty(message) {
  const container = document.querySelector("#sql-result");
  if (!container) return;
  container.className = "sql-result empty";
  container.textContent = message;
}

function renderSqlResults(results) {
  const container = document.querySelector("#sql-result");
  if (!container) return;
  container.className = "sql-result";

  if (!results.length) {
    renderSqlEmpty("Consulta executada sem linhas de retorno.");
    return;
  }

  container.innerHTML = results
    .map((result, index) => {
      const head = result.columns
        .map((column) => `<th>${escapeHtml(column)}</th>`)
        .join("");
      const rows = result.rows
        .map(
          (row) =>
            `<tr>${row
              .map((value) => `<td>${escapeHtml(formatSqlValue(value))}</td>`)
              .join("")}</tr>`,
        )
        .join("");
      const caption =
        results.length > 1
          ? `<caption>Resultado ${index + 1}</caption>`
          : "";

      return `<table>${caption}<thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
    })
    .join("");
}

function evaluateAttempt(sql, results) {
  const level = getCurrentLevel();
  const guide = getExerciseGuide(level, state.currentExercise);
  const normalized = normalizeSql(sql);
  const first = results[0];
  const rowCount = first?.rowCount ?? 0;
  const checks = [];

  checks.push({
    ok: Boolean(first) && (rowCount > 0 || guide.checks.allowEmpty),
    text: guide.checks.allowEmpty
      ? "Resultado vazio pode fazer sentido neste exercicio."
      : "A consulta retornou linhas para analisar.",
  });

  guide.checks.tables.forEach((table) => {
    checks.push({
      ok: normalized.includes(table),
      text: `Usa a tabela ${table}.`,
    });
  });

  guide.checks.terms.forEach((term) => {
    const ok =
      term === "select"
        ? normalized.trim().startsWith("select") || normalized.trim().startsWith("with")
        : normalized.includes(term);
    checks.push({
      ok,
      text: `Inclui ${term.toUpperCase()}.`,
    });
  });

  if (guide.checks.maxRows) {
    checks.push({
      ok: rowCount <= guide.checks.maxRows,
      text: `Limita o retorno a no maximo ${guide.checks.maxRows} linha(s).`,
    });
  }

  const passed = checks.filter((check) => check.ok).length;
  const score = Math.round((passed / checks.length) * 100);
  const status = score >= 85 ? "correct" : score >= 55 ? "almost" : "review";
  const label =
    status === "correct"
      ? "Ok"
      : status === "almost"
        ? "Quase"
        : "Revisar";

  return { status, label, score, checks };
}

function describeSqlResult(sql, results, evaluation) {
  const first = results[0];
  if (!first) return "A consulta executou, mas nao trouxe tabela de resultado para analisar.";
  const normalized = normalizeSql(sql);
  const parts = [
    `Retornou ${first.rowCount} linha(s) e ${first.columns.length} coluna(s).`,
  ];

  if (normalized.includes("join")) parts.push("Ha relacionamento entre tabelas.");
  if (normalized.includes("where")) parts.push("Ha filtro aplicado antes do resultado.");
  if (normalized.includes("group by")) parts.push("Ha agrupamento, entao confira a granularidade.");
  if (normalized.includes("order by")) parts.push("A ordenacao ajuda a ler prioridade ou ranking.");
  if (normalized.includes("over")) parts.push("Foi usada logica analitica por janela.");
  if (first.truncated) parts.push("O retorno foi cortado nas 100 primeiras linhas.");
  parts.push(`Status do exercicio: ${evaluation.label.toLowerCase()}.`);

  return parts.join(" ");
}

function saveAttempt(sql, results, evaluation) {
  const level = getCurrentLevel();
  const first = results[0];
  const history = storage.get(historyKey(level.id, state.currentExercise), []);
  const now = new Date();
  const attempt = {
    sql,
    status: evaluation.status,
    label: evaluation.label,
    score: evaluation.score,
    rowText: first
      ? `${first.rowCount} linha(s), ${first.columns.length} coluna(s)`
      : "sem retorno tabular",
    when: now.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  storage.set(statusKey(level.id, state.currentExercise), {
    status: evaluation.status,
    score: evaluation.score,
    label: evaluation.label,
  });
  storage.set(progressKey(`${level.id}-${state.currentExercise}`), true);
  storage.set(historyKey(level.id, state.currentExercise), [attempt, ...history].slice(0, 8));
}

function renderValidation(evaluation) {
  const container = document.querySelector("#sql-validation");
  if (!container) return;
  container.innerHTML = `
    <div class="validation-card status-${evaluation.status}">
      <strong>${evaluation.label} - ${evaluation.score}%</strong>
      <ul>
        ${evaluation.checks
          .map((check) => `<li class="${check.ok ? "ok" : "missing"}">${check.text}</li>`)
          .join("")}
      </ul>
    </div>
  `;
}

function formatSqlValue(value) {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "number") return Number.isInteger(value) ? String(value) : value.toFixed(2);
  return String(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function terminateSqlWorker() {
  if (sqlLab.worker) {
    sqlLab.worker.terminate();
  }
  sqlLab.worker = null;
  sqlLab.ready = false;
  sqlLab.pending.forEach(({ reject, timer }) => {
    clearTimeout(timer);
    reject(new Error("Execucao interrompida."));
  });
  sqlLab.pending.clear();
}

function createSqlWorker() {
  if (!document.querySelector("#sql-editor")) return;
  if (!window.Worker) {
    setSqlStatus("Worker indisponivel", "error");
    setSqlMessage("Seu navegador nao suporta a execucao isolada do laboratorio SQL.", true);
    return;
  }

  terminateSqlWorker();
  setSqlStatus("Carregando motor SQL");
  sqlLab.worker = new Worker("sql-worker.js");
  sqlLab.worker.onmessage = handleSqlWorkerMessage;
  sqlLab.worker.onerror = () => {
    setSqlStatus("Erro no motor SQL", "error");
    setSqlMessage("Nao foi possivel iniciar o SQLite no navegador.", true);
  };

  postSqlMessage("init", {}, 15000)
    .then((payload) => {
      sqlLab.ready = true;
      setSqlStatus("Base em memoria pronta", "ready");
      const total = payload.counts.reduce((sum, item) => sum + item.count, 0);
      setSqlMessage(`Base carregada com ${payload.counts.length} tabelas e ${total} registros.`);
      renderSqlEmpty("Execute uma consulta para ver os resultados.");
    })
    .catch((error) => {
      setSqlStatus("Erro no motor SQL", "error");
      setSqlMessage(error.message, true);
      renderSqlEmpty("Aguardando o motor SQL.");
    });
}

function handleSqlWorkerMessage(event) {
  const { id, type, message, results, counts } = event.data;
  const pending = sqlLab.pending.get(id);
  if (!pending) return;

  clearTimeout(pending.timer);
  sqlLab.pending.delete(id);

  if (type === "error") {
    pending.reject(new Error(message));
    return;
  }

  pending.resolve({ type, results, counts });
}

function postSqlMessage(type, payload = {}, timeoutMs = 4500) {
  return new Promise((resolve, reject) => {
    if (!sqlLab.worker) {
      reject(new Error("Motor SQL indisponivel."));
      return;
    }

    const id = `${Date.now()}-${++sqlLab.lastRunId}`;
    const timer = setTimeout(() => {
      sqlLab.pending.delete(id);
      terminateSqlWorker();
      createSqlWorker();
      reject(new Error("Consulta interrompida por tempo limite. A base foi recriada em memoria."));
    }, timeoutMs);

    sqlLab.pending.set(id, { resolve, reject, timer });
    sqlLab.worker.postMessage({ id, type, ...payload });
  });
}

function runCurrentSql() {
  const editor = document.querySelector("#sql-editor");
  const runButton = document.querySelector("#run-sql");
  if (!editor || !runButton) return;
  const sql = editor.value;
  runButton.disabled = true;
  setSqlMessage("Executando consulta...");

  postSqlMessage("run", { sql })
    .then(({ results }) => {
      renderSqlResults(results);
      const first = results[0];
      const evaluation = evaluateAttempt(sql, results);
      const insight = describeSqlResult(sql, results, evaluation);
      const insightBox = document.querySelector("#sql-insight");
      const rowText = first
        ? `${first.rowCount} linha(s) retornada(s)${first.truncated ? ", exibindo as 100 primeiras" : ""}`
        : "consulta sem linhas de retorno";
      setSqlMessage(`Executado em ${first?.elapsedMs ?? 0} ms: ${rowText}.`);
      if (insightBox) insightBox.textContent = insight;
      renderValidation(evaluation);
      saveAttempt(sql, results, evaluation);
      renderExerciseList();
      renderAttemptHistory();
      renderLabStats();
      const check = document.querySelector("#attempt-check");
      if (check) check.checked = true;
      const answerFile = document.querySelector("#answer-file");
      if (answerFile) {
        answerFile.classList.remove("disabled-link");
        answerFile.setAttribute("aria-disabled", "false");
      }
    })
    .catch((error) => {
      setSqlMessage(error.message, true);
      renderSqlEmpty("Corrija a consulta e tente novamente.");
    })
    .finally(() => {
      runButton.disabled = false;
    });
}

function resetSqlDatabase() {
  if (!sqlLab.worker) return;
  setSqlMessage("Restaurando a base em memoria...");
  postSqlMessage("reset", {}, 15000)
    .then((payload) => {
      sqlLab.ready = true;
      setSqlStatus("Base em memoria pronta", "ready");
      const total = payload.counts.reduce((sum, item) => sum + item.count, 0);
      setSqlMessage(`Base restaurada com ${payload.counts.length} tabelas e ${total} registros.`);
      renderSqlEmpty("Execute uma consulta para ver os resultados.");
    })
    .catch((error) => {
      setSqlStatus("Erro no motor SQL", "error");
      setSqlMessage(error.message, true);
    });
}

function markCurrentPage() {
  const page = document.body.dataset.page || "home";
  document.querySelectorAll(".topbar nav a").forEach((link) => {
    const target = link.getAttribute("href") || "";
    const isActive =
      (page === "home" && target === "index.html") ||
      target.startsWith(`${page}.html`);
    link.classList.toggle("active", isActive);
  });
}

function redirectLegacyHashRoutes() {
  if (document.body.dataset.page !== "home") return;

  const routes = {
    "#trilha": "trilha.html",
    "#laboratorio": "laboratorio.html",
    "#execucao": "laboratorio.html#execucao",
    "#base": "base.html",
  };
  const target = routes[window.location.hash];
  if (target) {
    window.location.replace(target);
  }
}

function initApp() {
  redirectLegacyHashRoutes();
  markCurrentPage();
  renderTimeline();
  renderStudyMap();
  renderLevelTabs();
  renderExerciseList();
  renderExercise();
  renderLabStats();
  renderReferences();
  renderTimer();
  wireExerciseControls();
  wireTimer();
  createSqlWorker();
}

initApp();
