-- ============================================================
-- NÍVEL 2 — GROUP BY, HAVING, JOIN
-- ============================================================

-- ┌─────────────────────────────────────────────────────────┐
-- │  REFERÊNCIA RÁPIDA — funções que você vai usar aqui     │
-- └─────────────────────────────────────────────────────────┘
--
-- Funções de agregação:
--   COUNT(*)          -- conta linhas
--   COUNT(coluna)     -- conta valores não nulos
--   SUM(coluna)       -- soma
--   AVG(coluna)       -- média
--   MIN(coluna)       -- menor valor
--   MAX(coluna)       -- maior valor
--   ROUND(valor, 2)   -- arredonda para 2 casas decimais
--
-- Agrupar resultados:
--   GROUP BY coluna
--   GROUP BY coluna1, coluna2
--
-- Filtrar grupos (use HAVING, não WHERE, com agregações):
--   HAVING COUNT(*) > 2
--   HAVING SUM(valor) > 1000
--
-- Cruzar tabelas (JOIN):
--   FROM tabela_a a
--   JOIN tabela_b b ON b.chave = a.chave
--
--   INNER JOIN → só linhas que batem nas duas tabelas
--   LEFT JOIN  → todas da esquerda + as que batem na direita
--
-- Alias (apelido para colunas e tabelas):
--   SELECT COUNT(*) AS total
--   FROM funcionarios f   -- "f" vira atalho para a tabela
--
-- Calcular em colunas:
--   SELECT quantidade * preco_unit AS total_item
--
-- Extrair mês/ano de data (SQLite):
--   strftime('%Y-%m', data)   -- retorna '2024-03'
--
-- ─────────────────────────────────────────────────────────────


-- ── Exercício 1 ─────────────────────────────────────────────
-- Quantos funcionários existem em cada departamento?
-- Mostre o nome do departamento e a contagem.
-- (Dica: JOIN entre funcionarios e departamentos)

-- Escreva sua query aqui:


-- ── Exercício 2 ─────────────────────────────────────────────
-- Qual é o salário médio, mínimo e máximo por departamento?

-- Escreva sua query aqui:


-- ── Exercício 3 ─────────────────────────────────────────────
-- Liste apenas os departamentos com mais de 2 funcionários.

-- Escreva sua query aqui:


-- ── Exercício 4 ─────────────────────────────────────────────
-- Liste todos os pedidos com o nome do cliente,
-- a data e o status.

-- Escreva sua query aqui:


-- ── Exercício 5 ─────────────────────────────────────────────
-- Mostre cada item de pedido com:
-- número do pedido, nome do produto, quantidade e preço unitário.

-- Escreva sua query aqui:


-- ── Exercício 6 ─────────────────────────────────────────────
-- Qual o valor total de cada pedido?
-- (quantidade * preco_unit, somado por pedido)
-- Mostre o id do pedido e o total, ordenado pelo maior total.

-- Escreva sua query aqui:


-- ── Exercício 7 ─────────────────────────────────────────────
-- Qual o total de receita por categoria de produto?
-- Considere apenas pedidos com status 'Entregue'.
-- (Dica: você vai precisar de JOIN em 3 tabelas)

-- Escreva sua query aqui:


-- ── Exercício 8 ─────────────────────────────────────────────
-- Quais clientes realizaram mais de 2 pedidos?
-- Mostre o nome do cliente e a quantidade de pedidos.

-- Escreva sua query aqui:


-- ── Exercício 9 ─────────────────────────────────────────────
-- Liste os funcionários com seus respectivos departamentos
-- e cidades, ordenados por cidade e depois por nome.

-- Escreva sua query aqui:


-- ── Exercício 10 ────────────────────────────────────────────
-- Mostre o total de vendas (receita) por mês.
-- Considere apenas pedidos 'Entregue'.
-- Dica: use strftime('%Y-%m', data) para extrair ano-mês.

-- Escreva sua query aqui:
