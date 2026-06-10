-- ============================================================
-- GABARITO — NÍVEL 4
-- ============================================================

-- Exercício 1
SELECT ROUND(SUM(ip.quantidade * ip.preco_unit), 2) AS receita_total,
       ROUND(SUM(ip.quantidade * pr.custo), 2)      AS custo_total,
       ROUND(SUM(ip.quantidade * (ip.preco_unit - pr.custo)), 2) AS lucro_total
FROM pedidos pe
JOIN itens_pedido ip ON ip.pedido_id = pe.id
JOIN produtos pr ON pr.id = ip.produto_id
WHERE pe.status = 'Entregue';

-- Exercício 2
SELECT pr.categoria,
       ROUND(SUM(ip.quantidade * ip.preco_unit), 2) AS receita,
       ROUND(SUM(ip.quantidade * (ip.preco_unit - pr.custo)), 2) AS lucro,
       ROUND(
           SUM(ip.quantidade * (ip.preco_unit - pr.custo))
           / NULLIF(SUM(ip.quantidade * ip.preco_unit), 0) * 100,
           1
       ) AS margem_pct
FROM pedidos pe
JOIN itens_pedido ip ON ip.pedido_id = pe.id
JOIN produtos pr ON pr.id = ip.produto_id
WHERE pe.status = 'Entregue'
GROUP BY pr.categoria
ORDER BY receita DESC;

-- Exercício 3
SELECT c.nome AS cliente,
       c.segmento,
       c.estado,
       ROUND(SUM(ip.quantidade * ip.preco_unit), 2) AS receita
FROM pedidos pe
JOIN clientes c ON c.id = pe.cliente_id
JOIN itens_pedido ip ON ip.pedido_id = pe.id
WHERE pe.status = 'Entregue'
GROUP BY c.id, c.nome, c.segmento, c.estado
ORDER BY receita DESC
LIMIT 5;

-- Exercício 4
SELECT c.segmento,
       COUNT(DISTINCT pe.id) AS pedidos_entregues,
       ROUND(SUM(ip.quantidade * ip.preco_unit), 2) AS receita,
       ROUND(SUM(ip.quantidade * ip.preco_unit) / COUNT(DISTINCT pe.id), 2) AS ticket_medio
FROM pedidos pe
JOIN clientes c ON c.id = pe.cliente_id
JOIN itens_pedido ip ON ip.pedido_id = pe.id
WHERE pe.status = 'Entregue'
GROUP BY c.segmento
ORDER BY ticket_medio DESC;

-- Exercício 5
WITH total AS (
    SELECT COUNT(*) AS total_pedidos
    FROM pedidos
)
SELECT p.status,
       COUNT(*) AS total,
       ROUND(COUNT(*) * 100.0 / total.total_pedidos, 1) AS percentual
FROM pedidos p
CROSS JOIN total
GROUP BY p.status, total.total_pedidos
ORDER BY total DESC;

-- Exercício 6
SELECT strftime('%Y-%m', pe.data) AS mes,
       COUNT(DISTINCT pe.id) AS pedidos_entregues,
       ROUND(SUM(ip.quantidade * ip.preco_unit), 2) AS receita,
       ROUND(SUM(ip.quantidade * ip.preco_unit) / COUNT(DISTINCT pe.id), 2) AS ticket_medio
FROM pedidos pe
JOIN itens_pedido ip ON ip.pedido_id = pe.id
WHERE pe.status = 'Entregue'
GROUP BY mes
ORDER BY mes;

-- Exercício 7
SELECT pr.nome AS produto,
       pr.categoria,
       SUM(ip.quantidade) AS quantidade_vendida,
       ROUND(SUM(ip.quantidade * ip.preco_unit), 2) AS receita
FROM pedidos pe
JOIN itens_pedido ip ON ip.pedido_id = pe.id
JOIN produtos pr ON pr.id = ip.produto_id
WHERE pe.status = 'Entregue'
GROUP BY pr.id, pr.nome, pr.categoria
ORDER BY quantidade_vendida DESC, receita DESC;

-- Exercício 8
SELECT nome, categoria, preco
FROM produtos
WHERE id NOT IN (
    SELECT DISTINCT produto_id
    FROM itens_pedido
)
ORDER BY nome;

-- Exercício 9
SELECT c.nome AS cliente,
       COUNT(DISTINCT pe.id) AS pedidos_pendentes,
       MAX(pe.data) AS ultimo_pedido_pendente,
       ROUND(SUM(ip.quantidade * ip.preco_unit), 2) AS valor_pendente
FROM pedidos pe
JOIN clientes c ON c.id = pe.cliente_id
JOIN itens_pedido ip ON ip.pedido_id = pe.id
WHERE pe.status = 'Pendente'
GROUP BY c.id, c.nome
ORDER BY valor_pendente DESC;

-- Exercício 10
WITH receita_cliente AS (
    SELECT c.id,
           c.nome,
           c.segmento,
           COALESCE(SUM(
               CASE
                   WHEN pe.status = 'Entregue' THEN ip.quantidade * ip.preco_unit
                   ELSE 0
               END
           ), 0) AS receita
    FROM clientes c
    LEFT JOIN pedidos pe ON pe.cliente_id = c.id
    LEFT JOIN itens_pedido ip ON ip.pedido_id = pe.id
    GROUP BY c.id, c.nome, c.segmento
)
SELECT nome AS cliente,
       segmento,
       ROUND(receita, 2) AS receita,
       CASE
           WHEN receita >= 20000 THEN 'Alto valor'
           WHEN receita >= 5000 THEN 'Médio valor'
           ELSE 'Baixo valor'
       END AS classificacao
FROM receita_cliente
ORDER BY receita DESC;
