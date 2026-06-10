-- ============================================================
-- NÍVEL 3 — SUBQUERIES, CTEs e WINDOW FUNCTIONS
-- ============================================================

-- ┌─────────────────────────────────────────────────────────┐
-- │  REFERÊNCIA RÁPIDA — funções que você vai usar aqui     │
-- └─────────────────────────────────────────────────────────┘
--
-- ── SUBQUERY ────────────────────────────────────────────────
-- Uma query dentro de outra. Executa primeiro.
--
--   WHERE coluna > (SELECT AVG(coluna) FROM tabela)
--
--   WHERE id IN (SELECT id FROM outra_tabela WHERE ...)
--
--   WHERE id NOT IN (SELECT id FROM outra_tabela)
--
-- Subquery correlacionada (referencia a tabela de fora):
--   WHERE coluna = (
--       SELECT MAX(coluna) FROM tabela t2
--       WHERE t2.grupo = t1.grupo   -- "t1" vem da query de fora
--   )
--
-- ── CTE (Common Table Expression) ───────────────────────────
-- Cria uma "tabela temporária" com nome, usada na mesma query.
--
--   WITH nome_da_cte AS (
--       SELECT ... FROM ...
--   )
--   SELECT * FROM nome_da_cte
--
-- Múltiplas CTEs:
--   WITH cte1 AS (...),
--        cte2 AS (...)
--   SELECT * FROM cte1 JOIN cte2 ON ...
--
-- ── WINDOW FUNCTIONS ────────────────────────────────────────
-- Calculam sobre um grupo de linhas sem colapsar em uma só.
--
--   RANK()       OVER (PARTITION BY grupo ORDER BY coluna DESC)
--   ROW_NUMBER() OVER (PARTITION BY grupo ORDER BY coluna)
--   SUM(col)     OVER (ORDER BY coluna)          -- acumulado
--   LAG(col)     OVER (ORDER BY coluna)          -- valor da linha anterior
--   LEAD(col)    OVER (ORDER BY coluna)          -- valor da linha seguinte
--
--   PARTITION BY → divide em grupos (como GROUP BY, mas sem colapsar)
--   ORDER BY     → define a ordem dentro de cada grupo
--
-- ── DATE no SQLite ───────────────────────────────────────────
--   DATE(coluna, '-3 months')   -- subtrai 3 meses de uma data
--   strftime('%Y', coluna)      -- extrai só o ano
--
-- ─────────────────────────────────────────────────────────────


-- ── Exercício 1 — Subquery ───────────────────────────────────
-- Liste os funcionários que ganham acima da média salarial
-- da empresa.

-- Escreva sua query aqui:


-- ── Exercício 2 — Subquery ───────────────────────────────────
-- Quais produtos nunca foram vendidos?
-- (nenhum registro em itens_pedido)

-- Escreva sua query aqui:


-- ── Exercício 3 — Subquery correlacionada ────────────────────
-- Para cada departamento, mostre o funcionário com
-- o maior salário.

-- Escreva sua query aqui:


-- ── Exercício 4 — CTE + LAG ──────────────────────────────────
-- Crie uma CTE chamada "receita_mensal" com o total de receita
-- por mês (pedidos 'Entregue'), depois calcule a variação
-- em relação ao mês anterior usando LAG().

-- Escreva sua query aqui:


-- ── Exercício 5 — CTE ────────────────────────────────────────
-- Crie uma CTE com o ticket médio por cliente
-- (valor total de pedidos / nº de pedidos).
-- Depois liste os 5 clientes com maior ticket médio.

-- Escreva sua query aqui:


-- ── Exercício 6 — RANK ───────────────────────────────────────
-- Ranqueie os funcionários por salário dentro de
-- cada departamento (1 = maior salário).

-- Escreva sua query aqui:


-- ── Exercício 7 — ROW_NUMBER ─────────────────────────────────
-- Numere os pedidos de cada cliente em ordem cronológica.
-- Mostre cliente, data, status e o número do pedido dele.

-- Escreva sua query aqui:


-- ── Exercício 8 — SUM acumulado ──────────────────────────────
-- Calcule a receita acumulada mês a mês ao longo de 2024.
-- (Dica: SUM() OVER (ORDER BY mes))

-- Escreva sua query aqui:


-- ── Exercício 9 — Desafio: múltiplas CTEs ────────────────────
-- Crie um relatório mostrando, por categoria de produto:
--   - Total de receita
--   - Lucro total (receita - custo * quantidade)
--   - Margem % ( lucro / receita * 100 )
-- Ordene pela maior margem.

-- Escreva sua query aqui:


-- ── Exercício 10 — Desafio final ─────────────────────────────
-- Identifique os "clientes em risco": clientes B2B que
-- compraram em 2024 mas não realizaram nenhum pedido
-- nos últimos 3 meses registrados no banco.
-- Dica: DATE(MAX(data), '-3 months') gera a data de corte.

-- Escreva sua query aqui:
