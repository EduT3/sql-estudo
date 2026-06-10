-- ============================================================
-- NÍVEL 5 — PROJETO FINAL: RELATÓRIO EXECUTIVO
-- ============================================================

-- Neste nível, você vai montar consultas que parecem mais próximas
-- de um relatório real de negócio. A ideia é combinar views, CTEs,
-- indicadores, ranking e classificação de clientes.

-- ┌─────────────────────────────────────────────────────────┐
-- │  REFERÊNCIA RÁPIDA — recursos úteis neste nível          │
-- └─────────────────────────────────────────────────────────┘
--
-- Criar uma view:
--   CREATE VIEW nome_da_view AS
--   SELECT ...
--
-- Remover uma view antes de recriar:
--   DROP VIEW IF EXISTS nome_da_view;
--
-- Ranking:
--   ROW_NUMBER() OVER (ORDER BY valor DESC)
--   RANK() OVER (PARTITION BY grupo ORDER BY valor DESC)
--
-- Diferença entre datas:
--   julianday(data_final) - julianday(data_inicial)
--
-- ─────────────────────────────────────────────────────────────


-- ── Exercício 1 — View base ─────────────────────────────────
-- Crie uma view chamada vw_vendas_detalhadas com:
-- pedido_id, data, status, cliente_id, cliente, estado, segmento,
-- produto_id, produto, categoria, quantidade, preco_unit, custo,
-- receita_item, custo_item e lucro_item.

-- Escreva sua query aqui:


-- ── Exercício 2 — Resultado mensal ──────────────────────────
-- Usando a view vw_vendas_detalhadas, monte um relatório mensal
-- de pedidos entregues com: mês, quantidade de pedidos, receita,
-- lucro e margem percentual.

-- Escreva sua query aqui:


-- ── Exercício 3 — Ranking de produtos por lucro ─────────────
-- Liste os 10 produtos com maior lucro total em pedidos entregues.
-- Inclua uma coluna de posição no ranking.

-- Escreva sua query aqui:


-- ── Exercício 4 — RFM simplificado ──────────────────────────
-- Crie uma análise por cliente com:
-- última compra entregue, frequência de pedidos entregues,
-- receita entregue e recência em dias.
-- Use como data de referência a maior data existente em pedidos.

-- Escreva sua query aqui:


-- ── Exercício 5 — Classificação de clientes ─────────────────
-- A partir da análise RFM simplificada, classifique os clientes:
--   - Recente: recência até 90 dias
--   - Acompanhar: recência entre 91 e 180 dias
--   - Reativação: recência acima de 180 dias

-- Escreva sua query aqui:


-- ── Exercício 6 — Melhor cliente por estado ─────────────────
-- Para cada estado, mostre o cliente com maior receita entregue.
-- Use ROW_NUMBER() ou RANK().

-- Escreva sua query aqui:


-- ── Exercício 7 — Comparativo B2B vs B2C ────────────────────
-- Compare os segmentos B2B e B2C com:
-- clientes compradores, pedidos entregues, receita, ticket médio
-- e margem percentual.

-- Escreva sua query aqui:


-- ── Exercício 8 — Produto líder por categoria ───────────────
-- Para cada categoria, identifique o produto com maior receita
-- em pedidos entregues.

-- Escreva sua query aqui:


-- ── Exercício 9 — Funil mensal de status ────────────────────
-- Mostre, por mês, total de pedidos, entregues, cancelados,
-- pendentes e percentual de pedidos entregues.

-- Escreva sua query aqui:


-- ── Exercício 10 — Painel executivo ─────────────────────────
-- Monte uma consulta final com estes indicadores em linhas:
--   - receita_total
--   - lucro_total
--   - margem_geral_pct
--   - ticket_medio_pedido
--   - clientes_com_compra
--   - pedidos_entregues

-- Escreva sua query aqui:
