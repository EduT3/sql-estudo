"""
setup.py — Cria o banco de dados SQLite com dados de exemplo.
Execute uma vez: python setup.py
"""

import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).resolve().parent / "dados" / "empresa.db"

def criar_banco():
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    cur.executescript("""
    PRAGMA foreign_keys = ON;

    -- ─── TABELAS ───────────────────────────────────────────────────────────────

    CREATE TABLE IF NOT EXISTS departamentos (
        id          INTEGER PRIMARY KEY,
        nome        TEXT NOT NULL,
        cidade      TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS funcionarios (
        id              INTEGER PRIMARY KEY,
        nome            TEXT NOT NULL,
        cargo           TEXT NOT NULL,
        salario         REAL NOT NULL,
        data_admissao   TEXT NOT NULL,          -- ISO 8601: YYYY-MM-DD
        departamento_id INTEGER NOT NULL,
        FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
    );

    CREATE TABLE IF NOT EXISTS clientes (
        id      INTEGER PRIMARY KEY,
        nome    TEXT NOT NULL,
        cidade  TEXT NOT NULL,
        estado  TEXT NOT NULL,
        segmento TEXT NOT NULL                  -- 'B2B' ou 'B2C'
    );

    CREATE TABLE IF NOT EXISTS produtos (
        id          INTEGER PRIMARY KEY,
        nome        TEXT NOT NULL,
        categoria   TEXT NOT NULL,
        preco       REAL NOT NULL,
        custo       REAL NOT NULL
    );

    CREATE TABLE IF NOT EXISTS pedidos (
        id          INTEGER PRIMARY KEY,
        cliente_id  INTEGER NOT NULL,
        data        TEXT NOT NULL,
        status      TEXT NOT NULL,              -- 'Entregue','Pendente','Cancelado'
        FOREIGN KEY (cliente_id) REFERENCES clientes(id)
    );

    CREATE TABLE IF NOT EXISTS itens_pedido (
        id          INTEGER PRIMARY KEY,
        pedido_id   INTEGER NOT NULL,
        produto_id  INTEGER NOT NULL,
        quantidade  INTEGER NOT NULL,
        preco_unit  REAL NOT NULL,
        FOREIGN KEY (pedido_id)  REFERENCES pedidos(id),
        FOREIGN KEY (produto_id) REFERENCES produtos(id)
    );
    """)

    # ─── DEPARTAMENTOS ─────────────────────────────────────────────────────────
    cur.executemany("INSERT OR IGNORE INTO departamentos VALUES (?,?,?)", [
        (1, "Vendas",          "São Paulo"),
        (2, "Tecnologia",      "São Paulo"),
        (3, "Marketing",       "Rio de Janeiro"),
        (4, "Financeiro",      "São Paulo"),
        (5, "RH",              "Belo Horizonte"),
        (6, "Operações",       "Curitiba"),
    ])

    # ─── FUNCIONÁRIOS ──────────────────────────────────────────────────────────
    cur.executemany("INSERT OR IGNORE INTO funcionarios VALUES (?,?,?,?,?,?)", [
        (1,  "Ana Souza",         "Gerente de Vendas",   12500.00, "2019-03-15", 1),
        (2,  "Bruno Lima",        "Analista de Vendas",   6800.00, "2021-07-01", 1),
        (3,  "Carla Mendes",      "Analista de Vendas",   6500.00, "2022-01-10", 1),
        (4,  "Diego Ferreira",    "Dev Backend",          9200.00, "2020-05-20", 2),
        (5,  "Elisa Costa",       "Dev Frontend",         8700.00, "2021-02-14", 2),
        (6,  "Felipe Rocha",      "Data Engineer",       10500.00, "2019-11-03", 2),
        (7,  "Gabriela Alves",    "Data Analyst",         8900.00, "2022-08-22", 2),
        (8,  "Henrique Neves",    "Gerente de Marketing", 11000.00, "2018-06-30", 3),
        (9,  "Isabela Torres",    "Analista de Mkt",      7200.00, "2023-01-05", 3),
        (10, "João Pereira",      "CFO",                 18000.00, "2017-04-01", 4),
        (11, "Karen Santos",      "Analista Financeiro",  7500.00, "2021-09-15", 4),
        (12, "Lucas Oliveira",    "Gerente de RH",        9800.00, "2020-03-10", 5),
        (13, "Mariana Ribeiro",   "Analista de RH",       6200.00, "2022-11-28", 5),
        (14, "Nicolas Barbosa",   "Gerente de Ops",      10200.00, "2019-08-17", 6),
        (15, "Olivia Castro",     "Analista de Ops",      6900.00, "2023-04-03", 6),
    ])

    # ─── CLIENTES ──────────────────────────────────────────────────────────────
    cur.executemany("INSERT OR IGNORE INTO clientes VALUES (?,?,?,?,?)", [
        (1,  "Empresa Alpha Ltda",      "São Paulo",       "SP", "B2B"),
        (2,  "Beta Comércio S.A.",      "Rio de Janeiro",  "RJ", "B2B"),
        (3,  "Gama Serviços",           "Curitiba",        "PR", "B2B"),
        (4,  "Delta Tech",              "Belo Horizonte",  "MG", "B2B"),
        (5,  "Épsilon Varejo",          "Porto Alegre",    "RS", "B2B"),
        (6,  "Mariana Costa",           "São Paulo",       "SP", "B2C"),
        (7,  "Rafael Andrade",          "Campinas",        "SP", "B2C"),
        (8,  "Juliana Ferraz",          "Rio de Janeiro",  "RJ", "B2C"),
        (9,  "Pedro Henrique Silva",    "Salvador",        "BA", "B2C"),
        (10, "Tatiane Moura",           "Fortaleza",       "CE", "B2C"),
        (11, "Zeta Indústrias",         "São Paulo",       "SP", "B2B"),
        (12, "Eta Distribuidora",       "Manaus",          "AM", "B2B"),
        (13, "Caio Mendonça",           "Recife",          "PE", "B2C"),
        (14, "Fernanda Lima",           "Brasília",        "DF", "B2C"),
        (15, "Theta Logística",         "Santos",          "SP", "B2B"),
    ])

    # ─── PRODUTOS ──────────────────────────────────────────────────────────────
    cur.executemany("INSERT OR IGNORE INTO produtos VALUES (?,?,?,?,?)", [
        (1,  "Notebook Pro 15",      "Hardware",   4500.00, 2800.00),
        (2,  "Mouse Sem Fio",        "Hardware",    180.00,   70.00),
        (3,  "Teclado Mecânico",     "Hardware",    350.00,  140.00),
        (4,  "Monitor 27\"",         "Hardware",   1800.00,  900.00),
        (5,  "Licença Office 365",   "Software",    699.00,  200.00),
        (6,  "Antivírus Anual",      "Software",    299.00,   80.00),
        (7,  "Suporte Ergonômico",   "Acessório",   420.00,  150.00),
        (8,  "Headset USB",          "Hardware",    280.00,  110.00),
        (9,  "Cadeira Gamer",        "Mobiliário", 2200.00, 1100.00),
        (10, "Mesa Ajustável",       "Mobiliário", 3100.00, 1600.00),
        (11, "Hub USB-C 7 portas",   "Hardware",    250.00,   90.00),
        (12, "SSD Externo 1TB",      "Hardware",    480.00,  220.00),
        (13, "Câmera Webcam 4K",     "Hardware",    650.00,  280.00),
        (14, "Curso SQL Avançado",   "Software",    399.00,   50.00),
        (15, "Impressora Laser",     "Hardware",   1350.00,  680.00),
        (16, "Projetor Portátil",    "Hardware",   2400.00, 1300.00),
    ])

    # ─── PEDIDOS ───────────────────────────────────────────────────────────────
    pedidos = [
        (1,  1,  "2024-01-08",  "Entregue"),
        (2,  3,  "2024-01-15",  "Entregue"),
        (3,  6,  "2024-01-22",  "Entregue"),
        (4,  2,  "2024-02-03",  "Entregue"),
        (5,  7,  "2024-02-10",  "Cancelado"),
        (6,  4,  "2024-02-18",  "Entregue"),
        (7,  11, "2024-03-05",  "Entregue"),
        (8,  8,  "2024-03-12",  "Entregue"),
        (9,  1,  "2024-03-20",  "Pendente"),
        (10, 5,  "2024-04-02",  "Entregue"),
        (11, 9,  "2024-04-14",  "Entregue"),
        (12, 12, "2024-04-25",  "Cancelado"),
        (13, 3,  "2024-05-06",  "Entregue"),
        (14, 6,  "2024-05-13",  "Entregue"),
        (15, 2,  "2024-05-28",  "Entregue"),
        (16, 13, "2024-06-04",  "Entregue"),
        (17, 14, "2024-06-19",  "Pendente"),
        (18, 15, "2024-07-01",  "Entregue"),
        (19, 4,  "2024-07-10",  "Entregue"),
        (20, 10, "2024-07-22",  "Entregue"),
        (21, 1,  "2024-08-05",  "Entregue"),
        (22, 7,  "2024-08-14",  "Cancelado"),
        (23, 11, "2024-08-30",  "Entregue"),
        (24, 5,  "2024-09-09",  "Entregue"),
        (25, 3,  "2024-09-20",  "Entregue"),
        (26, 6,  "2024-10-03",  "Entregue"),
        (27, 2,  "2024-10-15",  "Entregue"),
        (28, 12, "2024-10-28",  "Pendente"),
        (29, 8,  "2024-11-06",  "Entregue"),
        (30, 15, "2024-11-18",  "Entregue"),
        (31, 1,  "2024-12-02",  "Entregue"),
        (32, 9,  "2024-12-12",  "Entregue"),
        (33, 13, "2024-12-20",  "Entregue"),
        (34, 4,  "2025-01-08",  "Entregue"),
        (35, 10, "2025-01-17",  "Pendente"),
    ]
    cur.executemany("INSERT OR IGNORE INTO pedidos VALUES (?,?,?,?)", pedidos)

    # ─── ITENS DO PEDIDO ───────────────────────────────────────────────────────
    itens = [
        (1,  1,  1,  2, 4500.00),
        (2,  1,  2,  3,  180.00),
        (3,  2,  5,  5,  699.00),
        (4,  2,  6,  3,  299.00),
        (5,  3,  9,  1, 2200.00),
        (6,  4,  4,  2, 1800.00),
        (7,  4,  3,  2,  350.00),
        (8,  5,  2,  1,  180.00),   # cancelado
        (9,  6,  10, 1, 3100.00),
        (10, 6,  7,  2,  420.00),
        (11, 7,  1,  5, 4500.00),
        (12, 7,  5, 10,  699.00),
        (13, 8,  8,  2,  280.00),
        (14, 9,  2,  4,  180.00),
        (15, 9,  11, 4,  250.00),
        (16, 10, 12, 3,  480.00),
        (17, 10, 4,  1, 1800.00),
        (18, 11, 14, 1,  399.00),
        (19, 12, 15, 2, 1350.00),   # cancelado
        (20, 13, 6,  5,  299.00),
        (21, 13, 5,  5,  699.00),
        (22, 14, 9,  1, 2200.00),
        (23, 14, 10, 1, 3100.00),
        (24, 15, 1,  3, 4500.00),
        (25, 15, 13, 3,  650.00),
        (26, 16, 3,  2,  350.00),
        (27, 16, 2,  2,  180.00),
        (28, 17, 7,  1,  420.00),
        (29, 18, 4,  4, 1800.00),
        (30, 18, 8,  4,  280.00),
        (31, 19, 1,  2, 4500.00),
        (32, 19, 5,  2,  699.00),
        (33, 20, 12, 2,  480.00),
        (34, 21, 11, 6,  250.00),
        (35, 21, 2,  6,  180.00),
        (36, 22, 9,  1, 2200.00),   # cancelado
        (37, 23, 1,  4, 4500.00),
        (38, 23, 4,  4, 1800.00),
        (39, 24, 15, 1, 1350.00),
        (40, 24, 6,  2,  299.00),
        (41, 25, 5,  8,  699.00),
        (42, 26, 13, 2,  650.00),
        (43, 26, 8,  2,  280.00),
        (44, 27, 1,  3, 4500.00),
        (45, 27, 3,  3,  350.00),
        (46, 28, 10, 1, 3100.00),
        (47, 29, 12, 5,  480.00),
        (48, 30, 4,  2, 1800.00),
        (49, 30, 7,  2,  420.00),
        (50, 31, 1,  6, 4500.00),
        (51, 31, 5,  6,  699.00),
        (52, 32, 14, 2,  399.00),
        (53, 33, 9,  2, 2200.00),
        (54, 34, 1,  4, 4500.00),
        (55, 34, 4,  4, 1800.00),
        (56, 35, 2, 10,  180.00),
    ]
    cur.executemany("INSERT OR IGNORE INTO itens_pedido VALUES (?,?,?,?,?)", itens)

    tabelas = [
        "departamentos",
        "funcionarios",
        "clientes",
        "produtos",
        "pedidos",
        "itens_pedido",
    ]
    contagens = {
        tabela: cur.execute(f"SELECT COUNT(*) FROM {tabela}").fetchone()[0]
        for tabela in tabelas
    }

    conn.commit()
    conn.close()
    print("[OK] Banco criado com sucesso em:", DB_PATH)
    print("\nTabelas disponíveis:")
    for tabela in tabelas:
        print(f"  - {tabela:<14} ({contagens[tabela]} registros)")
    print("\nPróximo passo: abra os arquivos em exercicios/ e comece a treinar!")

if __name__ == "__main__":
    criar_banco()
