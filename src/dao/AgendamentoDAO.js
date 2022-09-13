import db from "../database/dbconfig.js";

// [CREATE] AgendamentoDAO

const createAgendamentoD = (data) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO AGENDAMENTO(ID, DESCRICAO, DATA, HORARIO, TATUADOR_ID, CLIENTE_ID, PRECO) VALUES (?,?,?,?,?,?,?)`,
      [
        data.id,
        data.descricao,
        data.data,
        data.horario,
        data.tatuadorId,
        data.clienteId,
        data.preco,
      ],
      (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(data);
        }
      }
    );
  });
};

// [GET] AgendamentosDAO

const findAllAgendamentosD = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM AGENDAMENTO", (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

// [GET] AgendamentoDAO

const findAgendamentoD = (id) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM AGENDAMENTO WHERE ID = ?`, id, (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

// [UPDATE] AgendamentoDAO

const updateAgendamentoD = (data) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE AGENDAMENTO SET DESCRICAO = ?, DATA = ?, HORARIO = ?, TATUADOR_ID = ?, CLIENTE_ID = ?, PRECO = ? WHERE ID = ?`,
      [
        data.descricao,
        data.data,
        data.horario,
        data.tatuadorId,
        data.clienteId,
        data.preco,
        data.id,
      ],
      (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(data);
        }
      }
    );
  });
};

// [DELETE] AgendamentoDAO

const deleteAgendamentoD = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM AGENDAMENTO WHERE ID = ?`, id, (erro) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve("Agendamento Removido!");
      }
    });
  });
};

export {
  findAllAgendamentosD,
  createAgendamentoD,
  findAgendamentoD,
  updateAgendamentoD,
  deleteAgendamentoD,
};
