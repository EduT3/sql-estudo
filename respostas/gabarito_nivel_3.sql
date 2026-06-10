-- ============================================================
-- GABARITO — NÍVEL 3
-- ============================================================

-- Exercício 1 — Subquery
SELECT nome, cargo, salario
FROM funcionarios
WHERE salario > (SELECT AVG(salario) FROM funcionarios)
ORDER BY salario DESC;

-- Exercício 2 — Subquery com NOT IN
SELECT nome, categoria, preco
FROM produtos
WHERE id NOT IN (SELECT DISTINCT produto_id FROM itens_pedido);

-- Exercício 3 — Subquery correlacionada
SELECT f.nome, d.nome AS departamento, f.salario
FROM funcionarios f
JOIN departamentos d ON d.id = f.departamento_id
WHERE f.salario = (
    SELECT MAX(f2.salario)
    FROM funcionarios f2
    WHERE f2.departamento_id = f.departamento_id
)
ORDER BY f.salario DESC;

-- Exercício 4 — CTE + LAG
WITH receita_mensal AS (
    SELECT strftime('%Y-%m', pe.data) AS mes,
           ROUND(SUM(ip.quantidade * ip.preco_unit), 2) AS receita
    FROM pedidos pe
    JOIN itens_pedido ip ON ip.pedido_id = pe.id
    WHERE pe.status = 'Entregue'
    GROUP BY mes
)
SELECT mes,
       receita,
       LAG(receita) OVER (ORDER BY mes) AS mes_anterior,
       ROUND(receita - LAG(receita) OVER (ORDER BY mes), 2) AS variacao
FROM receita_mensal
ORDER BY mes;

-- Exercício 5 — CTE + ticket médio
WITH totais AS (
    SELECT pe.cliente_id,
           SUM(ip.quantidade * ip.preco_unit) AS receita_total,
           COUNT(DISTINCT pe.id)              AS num_pedidos
    FROM pedidos pe
    JOIN itens_pedido ip ON ip.pedido_id = pe.id
    WHERE pe.status = 'Entregue'
    GROUP BY pe.cliente_id
)
SELECT c.nome,
       ROUND(t.receita_total / t.num_pedidos, 2) AS ticket_medio
FROM totais t
JOIN clientes c ON c.id = t.cliente_id
ORDER BY ticket_medio DESC
LIMIT 5;

-- Exercício 6 — RANK por departamento
SELECT f.nome,
       d.nome AS departamento,
       f.salario,
       RANK() OVER (PARTITION BY f.departamento_id ORDER BY f.salario DESC) AS ranking
FROM funcionarios f
JOIN departamentos d ON d.id = f.departamento_id
ORDER BY d.nome, ranking;

-- Exercício 7 — ROW_NUMBER por cliente
SELECT c.nome AS cliente,
       pe.data,
       pe.status,
       ROW_NUMBER() OVER (PARTITION BY pe.cliente_id ORDER BY pe.data) AS numero_pedido
FROM pedidos pe
JOIN clientes c ON c.id = pe.cliente_id
ORDER BY c.nome, pe.data;

-- Exercício 8 — SUM acumulado
WITH mensal AS (
    SELECT strftime('%Y-%m', pe.data) AS mes,
           ROUND(SUM(ip.quantidade * ip.preco_unit), 2) AS receita
    FROM pedidos pe
    JOIN itens_pedido ip ON ip.pedido_id = pe.id
    WHERE pe.status = 'Entregue'
      AND strftime('%Y', pe.data) = '2024'
    GROUP BY mes
)
SELECT mes,
       receita,
       ROUND(SUM(receita) OVER (ORDER BY mes), 2) AS receita_acumulada
FROM mensal
ORDER BY mes;

-- Exercício 9 — Margem por categoria
WITH vendas AS (
    SELECT pr.categoria,
           SUM(ip.quantidade * ip.preco_unit)   AS receita,
           SUM(ip.quantidade * pr.custo)        AS custo_total
    FROM itens_pedido ip
    JOIN produtos  pr ON pr.id  = ip.produto_id
    JOIN pedidos   pe ON pe.id  = ip.pedido_id
    WHERE pe.status = 'Entregue'
    GROUP BY pr.categoria
)
SELECT categoria,
       ROUND(receita, 2)                              AS receita,
       ROUND(receita - custo_total, 2)                AS lucro,
       ROUND((receita - custo_total) / receita * 100, 1) AS margem_pct
FROM vendas
ORDER BY margem_pct DESC;

-- Exercício 10 — Clientes em risco
WITH ultimo_pedido AS (
    SELECT cliente_id, MAX(data) AS ultima_compra
    FROM pedidos
    WHERE status = 'Entregue'
    GROUP BY cliente_id
),
data_corte AS (
    SELECT DATE(MAX(data), '-3 months') AS limite
    FROM pedidos
)
SELECT c.nome, c.segmento, up.ultima_compra
FROM clientes c
JOIN ultimo_pedido up ON up.cliente_id = c.id
JOIN data_corte dc
WHERE c.segmento = 'B2B'
  AND up.ultima_compra < dc.limite
ORDER BY up.ultima_compra;
