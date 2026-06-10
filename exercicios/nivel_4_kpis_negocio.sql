-- ============================================================
-- NÍVEL 4 — ANÁLISE DE NEGÓCIO E KPIs
-- ============================================================

-- ┌─────────────────────────────────────────────────────────┐
-- │  REFERÊNCIA RÁPIDA — recursos úteis neste nível          │
-- └─────────────────────────────────────────────────────────┘
--
-- Indicadores:
--   receita = quantidade * preco_unit
--   custo   = quantidade * custo
--   lucro   = receita - custo
--   margem  = lucro / receita * 100
--
-- Evitar divisão por zero:
--   valor / NULLIF(total, 0)
--
-- Substituir nulos:
--   COALESCE(valor, 0)
--
-- Classificar resultados:
--   CASE
--       WHEN condicao THEN 'classe'
--       ELSE 'outra classe'
--   END
--
-- Contar valores únicos:
--   COUNT(DISTINCT coluna)
--
-- ─────────────────────────────────────────────────────────────


-- ── Exercício 1 ─────────────────────────────────────────────
-- Calcule a receita total, o custo total e o lucro total
-- dos pedidos com status 'Entregue'.

-- Escreva sua query aqui:


-- ── Exercício 2 ─────────────────────────────────────────────
-- Mostre receita, lucro e margem percentual por categoria
-- de produto. Considere apenas pedidos 'Entregue'.

-- Escreva sua query aqui:


-- ── Exercício 3 ─────────────────────────────────────────────
-- Liste os 5 clientes com maior receita em pedidos entregues.
-- Mostre cliente, segmento, estado e receita total.

-- Escreva sua query aqui:


-- ── Exercício 4 ─────────────────────────────────────────────
-- Calcule o ticket médio por segmento de cliente (B2B e B2C).
-- Ticket médio = receita total / quantidade de pedidos entregues.

-- Escreva sua query aqui:


-- ── Exercício 5 ─────────────────────────────────────────────
-- Mostre a distribuição dos pedidos por status.
-- Inclua total de pedidos e percentual sobre o total geral.

-- Escreva sua query aqui:


-- ── Exercício 6 ─────────────────────────────────────────────
-- Mostre receita mensal, quantidade de pedidos entregues
-- e ticket médio mensal.

-- Escreva sua query aqui:


-- ── Exercício 7 ─────────────────────────────────────────────
-- Liste os produtos mais vendidos por quantidade.
-- Mostre produto, categoria, quantidade vendida e receita.
-- Considere apenas pedidos 'Entregue'.

-- Escreva sua query aqui:


-- ── Exercício 8 ─────────────────────────────────────────────
-- Quais produtos do catálogo nunca foram vendidos?
-- Mostre nome, categoria e preço.

-- Escreva sua query aqui:


-- ── Exercício 9 ─────────────────────────────────────────────
-- Liste clientes com pedidos pendentes.
-- Mostre cliente, quantidade de pedidos pendentes,
-- data do último pedido pendente e valor total pendente.

-- Escreva sua query aqui:


-- ── Exercício 10 ────────────────────────────────────────────
-- Classifique os clientes por receita entregue:
--   - Alto valor: receita >= 20000
--   - Médio valor: receita entre 5000 e 19999.99
--   - Baixo valor: receita abaixo de 5000
-- Mostre cliente, segmento, receita e classificação.

-- Escreva sua query aqui:
