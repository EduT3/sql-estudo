-- ============================================================
-- GABARITO — NÍVEL 2
-- ============================================================

-- Exercício 1
SELECT d.nome AS departamento, COUNT(f.id) AS total_funcionarios
FROM departamentos d
JOIN funcionarios f ON f.departamento_id = d.id
GROUP BY d.nome
ORDER BY total_funcionarios DESC;

-- Exercício 2
SELECT d.nome AS departamento,
       ROUND(AVG(f.salario), 2) AS media,
       MIN(f.salario)           AS minimo,
       MAX(f.salario)           AS maximo
FROM departamentos d
JOIN funcionarios f ON f.departamento_id = d.id
GROUP BY d.nome;

-- Exercício 3
SELECT d.nome AS departamento, COUNT(f.id) AS total
FROM departamentos d
JOIN funcionarios f ON f.departamento_id = d.id
GROUP BY d.nome
HAVING COUNT(f.id) > 2;

-- Exercício 4
SELECT p.id, c.nome AS cliente, p.data, p.status
FROM pedidos p
JOIN clientes c ON c.id = p.cliente_id
ORDER BY p.data;

-- Exercício 5
SELECT ip.pedido_id, pr.nome AS produto, ip.quantidade, ip.preco_unit
FROM itens_pedido ip
JOIN produtos pr ON pr.id = ip.produto_id
ORDER BY ip.pedido_id;

-- Exercício 6
SELECT pedido_id,
       ROUND(SUM(quantidade * preco_unit), 2) AS total
FROM itens_pedido
GROUP BY pedido_id
ORDER BY total DESC;

-- Exercício 7
SELECT pr.categoria,
       ROUND(SUM(ip.quantidade * ip.preco_unit), 2) AS receita_total
FROM itens_pedido ip
JOIN produtos pr  ON pr.id  = ip.produto_id
JOIN pedidos   pe ON pe.id  = ip.pedido_id
WHERE pe.status = 'Entregue'
GROUP BY pr.categoria
ORDER BY receita_total DESC;

-- Exercício 8
SELECT c.nome AS cliente, COUNT(p.id) AS total_pedidos
FROM clientes c
JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.nome
HAVING COUNT(p.id) > 2
ORDER BY total_pedidos DESC;

-- Exercício 9
SELECT f.nome, f.cargo, d.nome AS departamento, d.cidade
FROM funcionarios f
JOIN departamentos d ON d.id = f.departamento_id
ORDER BY d.cidade, f.nome;

-- Exercício 10
SELECT strftime('%Y-%m', pe.data)              AS mes,
       ROUND(SUM(ip.quantidade * ip.preco_unit), 2) AS receita
FROM pedidos pe
JOIN itens_pedido ip ON ip.pedido_id = pe.id
WHERE pe.status = 'Entregue'
GROUP BY mes
ORDER BY mes;
