-- ============================================================
-- GABARITO — NÍVEL 1
-- ============================================================

-- Exercício 1
SELECT nome, cargo, salario
FROM funcionarios
ORDER BY salario DESC;

-- Exercício 2
SELECT nome, cargo, salario
FROM funcionarios
WHERE departamento_id = 2;

-- Exercício 3
SELECT nome, categoria, preco
FROM produtos
WHERE preco > 1000
ORDER BY preco DESC;

-- Exercício 4
SELECT nome, preco
FROM produtos
ORDER BY preco ASC
LIMIT 5;

-- Exercício 5
SELECT nome, cidade, segmento
FROM clientes
WHERE estado = 'SP';

-- Exercício 6
SELECT id, cliente_id, data, status
FROM pedidos
WHERE status = 'Cancelado';

-- Exercício 7
SELECT nome, cargo, salario
FROM funcionarios
WHERE salario BETWEEN 7000 AND 10000
ORDER BY salario;

-- Exercício 8
SELECT nome, categoria, preco
FROM produtos
WHERE categoria IN ('Hardware', 'Mobiliário');

-- Exercício 9
SELECT nome, cargo, data_admissao
FROM funcionarios
WHERE data_admissao > '2022-01-01'
ORDER BY data_admissao;

-- Exercício 10
SELECT nome, cidade, segmento
FROM clientes
WHERE nome LIKE 'E%' OR nome LIKE '%Ltda';
