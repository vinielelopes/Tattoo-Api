import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./src/database/database.db");

// MATERIAIS

const createTable = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS MATERIAL (
        id INTEGER PRIMARY KEY,
        fornecedor VARCHAR(100),
        produto VARCHAR(100),
        quantidade VARCHAR(100),
        valor INTEGER
        )`,
    (err) => {
      if (err) {
        console.log(err + "Error to create table");
      } else {
        console.log("sucessfully created table");
      }
    }
  );
};

const populateTable = () => {
  db.run(
    `INSERT INTO MATERIAL (id, fornecedor, produto, quantidade, valor) VALUES
    (1, 'Trixxy', 'caneta rotativa T3100','5',350),
    (2, 'Master Agulhas', 'agulha de cobre','10',10),
    (3, 'Pro Cleanings', 'kit higienizador premium','150',30),
    (4, 'MaxWell', 'kit tintas variadas', '50',37)
    `,
    (err) => {
      if (err) {
        console.log(err + "Error to populate table");
      } else {
        console.log("sucessfully populated table");
      }
    }
  );
};

// AGENDAMENTO

const AGENDAMENTO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "AGENDAMENTO" (
  "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
  "DESCRICAO" VARCHAR(100),
  "DATA" DATE,
  "HORARIO" VARCHAR(5),
  "TATUADOR_ID" INTEGER,
  "CLIENTE_ID" INTEGER,
  "PRECO" DECIMAL,
  FOREIGN KEY(TATUADOR_ID) REFERENCES TATUADOR(ID),
  FOREIGN KEY(CLIENTE_ID) REFERENCES CLIENTS(CLIENT_ID)
  )`;

const ADD_AGENDAMENTO_DATA = `
  INSERT INTO AGENDAMENTO (ID, DESCRICAO, DATA, HORARIO, TATUADOR_ID, CLIENTE_ID, PRECO)
  VALUES
      (1, 'Tatuagem Colorida', '17-02-2022', '08:30', '1', '1', '750'),
      (2, 'Tatuagem Old School', '20-02-2022', '13:30', '2', '2', '900')`;

function createTableAgendamento() {
  db.run(AGENDAMENTO_SCHEMA, (error) => {
    if (error) console.log("[ERROR] Não foi possível criar a tabela.");
  });
}

function populateTableAgendamento() {
  db.run(ADD_AGENDAMENTO_DATA, (error) => {
    if (error) console.log("[ERROR] Não foi possível inserir dados na tabela.");
  });
}

// CLIENTES

const CLIENTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTS" (
    "CLIENT_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NAME" varchar(64),
    "CONTACT" varchar(100),
    "AGE" INT,
    "CITY" varchar(64)
);`;

const ADD_CLIENTS_DATA = `
INSERT INTO CLIENTS (client_id, name, contact, age, city)
VALUES 
    (1, 'Luiza da Silva Pereira', '(21) 98708-7261', '18', 'Rio de Janeiro'),
    (2, 'Lucas Nascimento de Sousa', '(88) 97431-0987', '25', 'Fortaleza'),
    (3, 'Marcela Goes Lima', '(21) 99723-8701', '40', 'Rio de Janeiro'),
    (4, 'Felipe Oliveira Júnior', '(11) 97653-8221', '33', 'São Paulo'),
    (5, 'João Ribeiro Lima', '(61) 9876-1281', '21', 'Brasília');
`;

function createTableC() {
  db.run(CLIENTS_SCHEMA, (error) => {
    if (error) console.log("Error to create clients table.");
  });
}

function populateTableC() {
  db.run(ADD_CLIENTS_DATA, (error) => {
    if (error) console.log("Error to populate clients table");
  });
}

db.serialize(() => {
  createTableAgendamento();
  populateTableAgendamento();
  createTable();
  populateTable();
  createTableC();
  populateTableC();
});
