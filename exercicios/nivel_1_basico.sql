-- ============================================================
-- NÍVEL 1 — SELECT, WHERE, ORDER BY, LIMIT
-- ============================================================
-- Como rodar: abra este arquivo no VS Code com a extensão
-- "SQLite" (alexcvzz.vscode-sqlite) e pressione Ctrl+Shift+P
-- → "SQLite: Run Query" apontando para dados/empresa.db
-- ============================================================

-- ┌─────────────────────────────────────────────────────────┐
-- │  REFERÊNCIA RÁPIDA — funções que você vai usar aqui     │
-- └─────────────────────────────────────────────────────────┘
--
-- Estrutura base:
--   SELECT coluna1, coluna2 FROM tabela
--
-- Filtrar linhas:
--   WHERE coluna = 'valor'
--   WHERE coluna > 1000
--   WHERE coluna BETWEEN 100 AND 500   -- inclusive nas pontas
--   WHERE coluna IN ('A', 'B', 'C')    -- igual a vários valores
--   WHERE coluna LIKE 'E%'             -- começa com E
--   WHERE coluna LIKE '%Ltda'          -- termina com Ltda
--   WHERE coluna LIKE '%tech%'         -- contém "tech"
--
-- Combinar condições:
--   WHERE x = 1 AND y = 2
--   WHERE x = 1 OR  y = 2
--
-- Ordenar:
--   ORDER BY coluna ASC    -- crescente (padrão)
--   ORDER BY coluna DESC   -- decrescente
--
-- Limitar resultados:
--   LIMIT 5
--
-- Datas no SQLite ficam no formato texto: 'YYYY-MM-DD'
--   Exemplo: '2022-01-01'
--
-- ─────────────────────────────────────────────────────────────

-- ── Exercício 1 ─────────────────────────────────────────────
-- Liste todos os funcionários (nome, cargo e salário),
-- ordenados do maior para o menor salário.

-- Escreva sua query aqui: 

-- ── Exercício 2 ─────────────────────────────────────────────
-- Liste os funcionários do departamento de id = 2 (Tecnologia).

-- Escreva sua query aqui:

-- ── Exercício 3 ─────────────────────────────────────────────
-- Quais produtos custam mais de R$ 1.000,00?
-- Mostre nome, categoria e preço.

-- Escreva sua query aqui:

-- ── Exercício 4 ─────────────────────────────────────────────
-- Liste os 5 produtos mais baratos.

-- Escreva sua query aqui:

-- ── Exercício 5 ─────────────────────────────────────────────
-- Quais clientes são do estado de SP?
-- Mostre nome, cidade e segmento.

-- Escreva sua query aqui:

-- ── Exercício 6 ─────────────────────────────────────────────
-- Liste todos os pedidos com status 'Cancelado'.

-- Escreva sua query aqui:

-- ── Exercício 7 ─────────────────────────────────────────────
-- Quais funcionários têm salário entre R$ 7.000 e R$ 10.000?

-- Escreva sua query aqui:

-- ── Exercício 8 ─────────────────────────────────────────────
-- Liste produtos da categoria 'Hardware' ou 'Mobiliário'.

-- Escreva sua query aqui:

-- ── Exercício 9 ─────────────────────────────────────────────
-- Quais funcionários foram admitidos após 01/01/2022?

-- Escreva sua query aqui:

-- ── Exercício 10 ────────────────────────────────────────────
-- Liste clientes cujo nome começa com a letra "E"
-- ou termina com "Ltda".

-- Escreva sua query aqui:
