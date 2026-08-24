-- Base publica ficticia para execucao SQL no navegador.
PRAGMA foreign_keys=OFF;
CREATE TABLE clientes (
        id      INTEGER PRIMARY KEY,
        nome    TEXT NOT NULL,
        cidade  TEXT NOT NULL,
        estado  TEXT NOT NULL,
        segmento TEXT NOT NULL                  -- 'B2B' ou 'B2C'
    );
INSERT INTO "clientes" VALUES(1,'Empresa Alpha Ltda','São Paulo','SP','B2B');
INSERT INTO "clientes" VALUES(2,'Beta Comércio S.A.','Rio de Janeiro','RJ','B2B');
INSERT INTO "clientes" VALUES(3,'Gama Serviços','Curitiba','PR','B2B');
INSERT INTO "clientes" VALUES(4,'Delta Tech','Belo Horizonte','MG','B2B');
INSERT INTO "clientes" VALUES(5,'Épsilon Varejo','Porto Alegre','RS','B2B');
INSERT INTO "clientes" VALUES(6,'Mariana Costa','São Paulo','SP','B2C');
INSERT INTO "clientes" VALUES(7,'Rafael Andrade','Campinas','SP','B2C');
INSERT INTO "clientes" VALUES(8,'Juliana Ferraz','Rio de Janeiro','RJ','B2C');
INSERT INTO "clientes" VALUES(9,'Pedro Henrique Silva','Salvador','BA','B2C');
INSERT INTO "clientes" VALUES(10,'Tatiane Moura','Fortaleza','CE','B2C');
INSERT INTO "clientes" VALUES(11,'Zeta Indústrias','São Paulo','SP','B2B');
INSERT INTO "clientes" VALUES(12,'Eta Distribuidora','Manaus','AM','B2B');
INSERT INTO "clientes" VALUES(13,'Caio Mendonça','Recife','PE','B2C');
INSERT INTO "clientes" VALUES(14,'Fernanda Lima','Brasília','DF','B2C');
INSERT INTO "clientes" VALUES(15,'Theta Logística','Santos','SP','B2B');
CREATE TABLE departamentos (
        id          INTEGER PRIMARY KEY,
        nome        TEXT NOT NULL,
        cidade      TEXT NOT NULL
    );
INSERT INTO "departamentos" VALUES(1,'Vendas','São Paulo');
INSERT INTO "departamentos" VALUES(2,'Tecnologia','São Paulo');
INSERT INTO "departamentos" VALUES(3,'Marketing','Rio de Janeiro');
INSERT INTO "departamentos" VALUES(4,'Financeiro','São Paulo');
INSERT INTO "departamentos" VALUES(5,'RH','Belo Horizonte');
INSERT INTO "departamentos" VALUES(6,'Operações','Curitiba');
CREATE TABLE funcionarios (
        id              INTEGER PRIMARY KEY,
        nome            TEXT NOT NULL,
        cargo           TEXT NOT NULL,
        salario         REAL NOT NULL,
        data_admissao   TEXT NOT NULL,          -- ISO 8601: YYYY-MM-DD
        departamento_id INTEGER NOT NULL,
        FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
    );
INSERT INTO "funcionarios" VALUES(1,'Ana Souza','Gerente de Vendas',12500.0,'2019-03-15',1);
INSERT INTO "funcionarios" VALUES(2,'Bruno Lima','Analista de Vendas',6800.0,'2021-07-01',1);
INSERT INTO "funcionarios" VALUES(3,'Carla Mendes','Analista de Vendas',6500.0,'2022-01-10',1);
INSERT INTO "funcionarios" VALUES(4,'Diego Ferreira','Dev Backend',9200.0,'2020-05-20',2);
INSERT INTO "funcionarios" VALUES(5,'Elisa Costa','Dev Frontend',8700.0,'2021-02-14',2);
INSERT INTO "funcionarios" VALUES(6,'Felipe Rocha','Data Engineer',10500.0,'2019-11-03',2);
INSERT INTO "funcionarios" VALUES(7,'Gabriela Alves','Data Analyst',8900.0,'2022-08-22',2);
INSERT INTO "funcionarios" VALUES(8,'Henrique Neves','Gerente de Marketing',11000.0,'2018-06-30',3);
INSERT INTO "funcionarios" VALUES(9,'Isabela Torres','Analista de Mkt',7200.0,'2023-01-05',3);
INSERT INTO "funcionarios" VALUES(10,'João Pereira','CFO',18000.0,'2017-04-01',4);
INSERT INTO "funcionarios" VALUES(11,'Karen Santos','Analista Financeiro',7500.0,'2021-09-15',4);
INSERT INTO "funcionarios" VALUES(12,'Lucas Oliveira','Gerente de RH',9800.0,'2020-03-10',5);
INSERT INTO "funcionarios" VALUES(13,'Mariana Ribeiro','Analista de RH',6200.0,'2022-11-28',5);
INSERT INTO "funcionarios" VALUES(14,'Nicolas Barbosa','Gerente de Ops',10200.0,'2019-08-17',6);
INSERT INTO "funcionarios" VALUES(15,'Olivia Castro','Analista de Ops',6900.0,'2023-04-03',6);
CREATE TABLE itens_pedido (
        id          INTEGER PRIMARY KEY,
        pedido_id   INTEGER NOT NULL,
        produto_id  INTEGER NOT NULL,
        quantidade  INTEGER NOT NULL,
        preco_unit  REAL NOT NULL,
        FOREIGN KEY (pedido_id)  REFERENCES pedidos(id),
        FOREIGN KEY (produto_id) REFERENCES produtos(id)
    );
INSERT INTO "itens_pedido" VALUES(1,1,1,2,4500.0);
INSERT INTO "itens_pedido" VALUES(2,1,2,3,180.0);
INSERT INTO "itens_pedido" VALUES(3,2,5,5,699.0);
INSERT INTO "itens_pedido" VALUES(4,2,6,3,299.0);
INSERT INTO "itens_pedido" VALUES(5,3,9,1,2200.0);
INSERT INTO "itens_pedido" VALUES(6,4,4,2,1800.0);
INSERT INTO "itens_pedido" VALUES(7,4,3,2,350.0);
INSERT INTO "itens_pedido" VALUES(8,5,2,1,180.0);
INSERT INTO "itens_pedido" VALUES(9,6,10,1,3100.0);
INSERT INTO "itens_pedido" VALUES(10,6,7,2,420.0);
INSERT INTO "itens_pedido" VALUES(11,7,1,5,4500.0);
INSERT INTO "itens_pedido" VALUES(12,7,5,10,699.0);
INSERT INTO "itens_pedido" VALUES(13,8,8,2,280.0);
INSERT INTO "itens_pedido" VALUES(14,9,2,4,180.0);
INSERT INTO "itens_pedido" VALUES(15,9,11,4,250.0);
INSERT INTO "itens_pedido" VALUES(16,10,12,3,480.0);
INSERT INTO "itens_pedido" VALUES(17,10,4,1,1800.0);
INSERT INTO "itens_pedido" VALUES(18,11,14,1,399.0);
INSERT INTO "itens_pedido" VALUES(19,12,15,2,1350.0);
INSERT INTO "itens_pedido" VALUES(20,13,6,5,299.0);
INSERT INTO "itens_pedido" VALUES(21,13,5,5,699.0);
INSERT INTO "itens_pedido" VALUES(22,14,9,1,2200.0);
INSERT INTO "itens_pedido" VALUES(23,14,10,1,3100.0);
INSERT INTO "itens_pedido" VALUES(24,15,1,3,4500.0);
INSERT INTO "itens_pedido" VALUES(25,15,13,3,650.0);
INSERT INTO "itens_pedido" VALUES(26,16,3,2,350.0);
INSERT INTO "itens_pedido" VALUES(27,16,2,2,180.0);
INSERT INTO "itens_pedido" VALUES(28,17,7,1,420.0);
INSERT INTO "itens_pedido" VALUES(29,18,4,4,1800.0);
INSERT INTO "itens_pedido" VALUES(30,18,8,4,280.0);
INSERT INTO "itens_pedido" VALUES(31,19,1,2,4500.0);
INSERT INTO "itens_pedido" VALUES(32,19,5,2,699.0);
INSERT INTO "itens_pedido" VALUES(33,20,12,2,480.0);
INSERT INTO "itens_pedido" VALUES(34,21,11,6,250.0);
INSERT INTO "itens_pedido" VALUES(35,21,2,6,180.0);
INSERT INTO "itens_pedido" VALUES(36,22,9,1,2200.0);
INSERT INTO "itens_pedido" VALUES(37,23,1,4,4500.0);
INSERT INTO "itens_pedido" VALUES(38,23,4,4,1800.0);
INSERT INTO "itens_pedido" VALUES(39,24,15,1,1350.0);
INSERT INTO "itens_pedido" VALUES(40,24,6,2,299.0);
INSERT INTO "itens_pedido" VALUES(41,25,5,8,699.0);
INSERT INTO "itens_pedido" VALUES(42,26,13,2,650.0);
INSERT INTO "itens_pedido" VALUES(43,26,8,2,280.0);
INSERT INTO "itens_pedido" VALUES(44,27,1,3,4500.0);
INSERT INTO "itens_pedido" VALUES(45,27,3,3,350.0);
INSERT INTO "itens_pedido" VALUES(46,28,10,1,3100.0);
INSERT INTO "itens_pedido" VALUES(47,29,12,5,480.0);
INSERT INTO "itens_pedido" VALUES(48,30,4,2,1800.0);
INSERT INTO "itens_pedido" VALUES(49,30,7,2,420.0);
INSERT INTO "itens_pedido" VALUES(50,31,1,6,4500.0);
INSERT INTO "itens_pedido" VALUES(51,31,5,6,699.0);
INSERT INTO "itens_pedido" VALUES(52,32,14,2,399.0);
INSERT INTO "itens_pedido" VALUES(53,33,9,2,2200.0);
INSERT INTO "itens_pedido" VALUES(54,34,1,4,4500.0);
INSERT INTO "itens_pedido" VALUES(55,34,4,4,1800.0);
INSERT INTO "itens_pedido" VALUES(56,35,2,10,180.0);
CREATE TABLE pedidos (
        id          INTEGER PRIMARY KEY,
        cliente_id  INTEGER NOT NULL,
        data        TEXT NOT NULL,
        status      TEXT NOT NULL,              -- 'Entregue','Pendente','Cancelado'
        FOREIGN KEY (cliente_id) REFERENCES clientes(id)
    );
INSERT INTO "pedidos" VALUES(1,1,'2024-01-08','Entregue');
INSERT INTO "pedidos" VALUES(2,3,'2024-01-15','Entregue');
INSERT INTO "pedidos" VALUES(3,6,'2024-01-22','Entregue');
INSERT INTO "pedidos" VALUES(4,2,'2024-02-03','Entregue');
INSERT INTO "pedidos" VALUES(5,7,'2024-02-10','Cancelado');
INSERT INTO "pedidos" VALUES(6,4,'2024-02-18','Entregue');
INSERT INTO "pedidos" VALUES(7,11,'2024-03-05','Entregue');
INSERT INTO "pedidos" VALUES(8,8,'2024-03-12','Entregue');
INSERT INTO "pedidos" VALUES(9,1,'2024-03-20','Pendente');
INSERT INTO "pedidos" VALUES(10,5,'2024-04-02','Entregue');
INSERT INTO "pedidos" VALUES(11,9,'2024-04-14','Entregue');
INSERT INTO "pedidos" VALUES(12,12,'2024-04-25','Cancelado');
INSERT INTO "pedidos" VALUES(13,3,'2024-05-06','Entregue');
INSERT INTO "pedidos" VALUES(14,6,'2024-05-13','Entregue');
INSERT INTO "pedidos" VALUES(15,2,'2024-05-28','Entregue');
INSERT INTO "pedidos" VALUES(16,13,'2024-06-04','Entregue');
INSERT INTO "pedidos" VALUES(17,14,'2024-06-19','Pendente');
INSERT INTO "pedidos" VALUES(18,15,'2024-07-01','Entregue');
INSERT INTO "pedidos" VALUES(19,4,'2024-07-10','Entregue');
INSERT INTO "pedidos" VALUES(20,10,'2024-07-22','Entregue');
INSERT INTO "pedidos" VALUES(21,1,'2024-08-05','Entregue');
INSERT INTO "pedidos" VALUES(22,7,'2024-08-14','Cancelado');
INSERT INTO "pedidos" VALUES(23,11,'2024-08-30','Entregue');
INSERT INTO "pedidos" VALUES(24,5,'2024-09-09','Entregue');
INSERT INTO "pedidos" VALUES(25,3,'2024-09-20','Entregue');
INSERT INTO "pedidos" VALUES(26,6,'2024-10-03','Entregue');
INSERT INTO "pedidos" VALUES(27,2,'2024-10-15','Entregue');
INSERT INTO "pedidos" VALUES(28,12,'2024-10-28','Pendente');
INSERT INTO "pedidos" VALUES(29,8,'2024-11-06','Entregue');
INSERT INTO "pedidos" VALUES(30,15,'2024-11-18','Entregue');
INSERT INTO "pedidos" VALUES(31,1,'2024-12-02','Entregue');
INSERT INTO "pedidos" VALUES(32,9,'2024-12-12','Entregue');
INSERT INTO "pedidos" VALUES(33,13,'2024-12-20','Entregue');
INSERT INTO "pedidos" VALUES(34,4,'2025-01-08','Entregue');
INSERT INTO "pedidos" VALUES(35,10,'2025-01-17','Pendente');
CREATE TABLE produtos (
        id          INTEGER PRIMARY KEY,
        nome        TEXT NOT NULL,
        categoria   TEXT NOT NULL,
        preco       REAL NOT NULL,
        custo       REAL NOT NULL
    );
INSERT INTO "produtos" VALUES(1,'Notebook Pro 15','Hardware',4500.0,2800.0);
INSERT INTO "produtos" VALUES(2,'Mouse Sem Fio','Hardware',180.0,70.0);
INSERT INTO "produtos" VALUES(3,'Teclado Mecânico','Hardware',350.0,140.0);
INSERT INTO "produtos" VALUES(4,'Monitor 27"','Hardware',1800.0,900.0);
INSERT INTO "produtos" VALUES(5,'Licença Office 365','Software',699.0,200.0);
INSERT INTO "produtos" VALUES(6,'Antivírus Anual','Software',299.0,80.0);
INSERT INTO "produtos" VALUES(7,'Suporte Ergonômico','Acessório',420.0,150.0);
INSERT INTO "produtos" VALUES(8,'Headset USB','Hardware',280.0,110.0);
INSERT INTO "produtos" VALUES(9,'Cadeira Gamer','Mobiliário',2200.0,1100.0);
INSERT INTO "produtos" VALUES(10,'Mesa Ajustável','Mobiliário',3100.0,1600.0);
INSERT INTO "produtos" VALUES(11,'Hub USB-C 7 portas','Hardware',250.0,90.0);
INSERT INTO "produtos" VALUES(12,'SSD Externo 1TB','Hardware',480.0,220.0);
INSERT INTO "produtos" VALUES(13,'Câmera Webcam 4K','Hardware',650.0,280.0);
INSERT INTO "produtos" VALUES(14,'Curso SQL Avançado','Software',399.0,50.0);
INSERT INTO "produtos" VALUES(15,'Impressora Laser','Hardware',1350.0,680.0);
INSERT INTO "produtos" VALUES(16,'Projetor Portátil','Hardware',2400.0,1300.0);
PRAGMA foreign_keys=ON;
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
