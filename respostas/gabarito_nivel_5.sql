-- ============================================================
-- GABARITO — NÍVEL 5
-- ============================================================

-- Exercício 1 — View base
DROP VIEW IF EXISTS vw_vendas_detalhadas;

CREATE VIEW vw_vendas_detalhadas AS
SELECT pe.id AS pedido_id,
       pe.data,
       pe.status,
       c.id AS cliente_id,
       c.nome AS cliente,
       c.estado,
       c.segmento,
       pr.id AS produto_id,
       pr.nome AS produto,
       pr.categoria,
       ip.quantidade,
       ip.preco_unit,
       pr.custo,
       ip.quantidade * ip.preco_unit AS receita_item,
       ip.quantidade * pr.custo AS custo_item,
       ip.quantidade * (ip.preco_unit - pr.custo) AS lucro_item
FROM pedidos pe
JOIN clientes c ON c.id = pe.cliente_id
JOIN itens_pedido ip ON ip.pedido_id = pe.id
JOIN produtos pr ON pr.id = ip.produto_id;

-- Exercício 2 — Resultado mensal
SELECT strftime('%Y-%m', data) AS mes,
       COUNT(DISTINCT pedido_id) AS pedidos_entregues,
       ROUND(SUM(receita_item), 2) AS receita,
       ROUND(SUM(lucro_item), 2) AS lucro,
       ROUND(SUM(lucro_item) / NULLIF(SUM(receita_item), 0) * 100, 1) AS margem_pct
FROM vw_vendas_detalhadas
WHERE status = 'Entregue'
GROUP BY mes
ORDER BY mes;

-- Exercício 3 — Ranking de produtos por lucro
WITH lucro_produto AS (
    SELECT produto,
           categoria,
           ROUND(SUM(lucro_item), 2) AS lucro
    FROM vw_vendas_detalhadas
    WHERE status = 'Entregue'
    GROUP BY produto_id, produto, categoria
)
SELECT ROW_NUMBER() OVER (ORDER BY lucro DESC) AS posicao,
       produto,
       categoria,
       lucro
FROM lucro_produto
ORDER BY posicao
LIMIT 10;

-- Exercício 4 — RFM simplificado
WITH compras AS (
    SELECT cliente_id,
           cliente,
           segmento,
           estado,
           MAX(data) AS ultima_compra,
           COUNT(DISTINCT pedido_id) AS frequencia,
           SUM(receita_item) AS receita
    FROM vw_vendas_detalhadas
    WHERE status = 'Entregue'
    GROUP BY cliente_id, cliente, segmento, estado
),
data_ref AS (
    SELECT MAX(data) AS data_maxima
    FROM pedidos
)
SELECT c.cliente,
       c.segmento,
       c.estado,
       c.ultima_compra,
       c.frequencia,
       ROUND(c.receita, 2) AS receita,
       CAST(julianday(dr.data_maxima) - julianday(c.ultima_compra) AS INTEGER) AS recencia_dias
FROM compras c
CROSS JOIN data_ref dr
ORDER BY receita DESC;

-- Exercício 5 — Classificação de clientes
WITH compras AS (
    SELECT cliente_id,
           cliente,
           segmento,
           MAX(data) AS ultima_compra,
           COUNT(DISTINCT pedido_id) AS frequencia,
           SUM(receita_item) AS receita
    FROM vw_vendas_detalhadas
    WHERE status = 'Entregue'
    GROUP BY cliente_id, cliente, segmento
),
data_ref AS (
    SELECT MAX(data) AS data_maxima
    FROM pedidos
),
rfm AS (
    SELECT c.*,
           CAST(julianday(dr.data_maxima) - julianday(c.ultima_compra) AS INTEGER) AS recencia_dias
    FROM compras c
    CROSS JOIN data_ref dr
)
SELECT cliente,
       segmento,
       ultima_compra,
       frequencia,
       ROUND(receita, 2) AS receita,
       recencia_dias,
       CASE
           WHEN recencia_dias <= 90 THEN 'Recente'
           WHEN recencia_dias <= 180 THEN 'Acompanhar'
           ELSE 'Reativação'
       END AS status_cliente
FROM rfm
ORDER BY recencia_dias, receita DESC;

-- Exercício 6 — Melhor cliente por estado
WITH receita_cliente AS (
    SELECT estado,
           cliente_id,
           cliente,
           ROUND(SUM(receita_item), 2) AS receita
    FROM vw_vendas_detalhadas
    WHERE status = 'Entregue'
    GROUP BY estado, cliente_id, cliente
),
ranking AS (
    SELECT estado,
           cliente,
           receita,
           ROW_NUMBER() OVER (PARTITION BY estado ORDER BY receita DESC) AS posicao
    FROM receita_cliente
)
SELECT estado, cliente, receita
FROM ranking
WHERE posicao = 1
ORDER BY estado;

-- Exercício 7 — Comparativo B2B vs B2C
SELECT segmento,
       COUNT(DISTINCT cliente_id) AS clientes_compradores,
       COUNT(DISTINCT pedido_id) AS pedidos_entregues,
       ROUND(SUM(receita_item), 2) AS receita,
       ROUND(SUM(receita_item) / COUNT(DISTINCT pedido_id), 2) AS ticket_medio,
       ROUND(SUM(lucro_item) / NULLIF(SUM(receita_item), 0) * 100, 1) AS margem_pct
FROM vw_vendas_detalhadas
WHERE status = 'Entregue'
GROUP BY segmento
ORDER BY receita DESC;

-- Exercício 8 — Produto líder por categoria
WITH vendas_produto AS (
    SELECT categoria,
           produto_id,
           produto,
           ROUND(SUM(receita_item), 2) AS receita
    FROM vw_vendas_detalhadas
    WHERE status = 'Entregue'
    GROUP BY categoria, produto_id, produto
),
ranking AS (
    SELECT categoria,
           produto,
           receita,
           ROW_NUMBER() OVER (PARTITION BY categoria ORDER BY receita DESC) AS posicao
    FROM vendas_produto
)
SELECT categoria, produto, receita
FROM ranking
WHERE posicao = 1
ORDER BY categoria;

-- Exercício 9 — Funil mensal de status
SELECT strftime('%Y-%m', data) AS mes,
       COUNT(*) AS total_pedidos,
       SUM(CASE WHEN status = 'Entregue' THEN 1 ELSE 0 END) AS entregues,
       SUM(CASE WHEN status = 'Cancelado' THEN 1 ELSE 0 END) AS cancelados,
       SUM(CASE WHEN status = 'Pendente' THEN 1 ELSE 0 END) AS pendentes,
       ROUND(
           SUM(CASE WHEN status = 'Entregue' THEN 1 ELSE 0 END)
           * 100.0 / COUNT(*),
           1
       ) AS pct_entregue
FROM pedidos
GROUP BY mes
ORDER BY mes;

-- Exercício 10 — Painel executivo
WITH pedidos_entregues AS (
    SELECT pedido_id,
           cliente_id,
           SUM(receita_item) AS receita,
           SUM(lucro_item) AS lucro
    FROM vw_vendas_detalhadas
    WHERE status = 'Entregue'
    GROUP BY pedido_id, cliente_id
)
SELECT 'receita_total' AS indicador,
       ROUND(SUM(receita), 2) AS valor
FROM pedidos_entregues
UNION ALL
SELECT 'lucro_total',
       ROUND(SUM(lucro), 2)
FROM pedidos_entregues
UNION ALL
SELECT 'margem_geral_pct',
       ROUND(SUM(lucro) / NULLIF(SUM(receita), 0) * 100, 1)
FROM pedidos_entregues
UNION ALL
SELECT 'ticket_medio_pedido',
       ROUND(SUM(receita) / COUNT(DISTINCT pedido_id), 2)
FROM pedidos_entregues
UNION ALL
SELECT 'clientes_com_compra',
       COUNT(DISTINCT cliente_id)
FROM pedidos_entregues
UNION ALL
SELECT 'pedidos_entregues',
       COUNT(DISTINCT pedido_id)
FROM pedidos_entregues;
