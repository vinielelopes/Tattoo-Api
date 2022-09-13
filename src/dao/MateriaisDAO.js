import db from "../database/config.js";

const createMaterialD = (data) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO MATERIAL (id, fornecedor, produto, quantidade, valor) VALUES (?,?,?,?,?)`,
      [data.id, data.fornecedor, data.produto, data.quantidade, data.valor],
      (error) => {
        if (error) {
          reject(error.message);
        } else {
          resolve(data);
        }
      }
    );
  });
};

const findAllMaterialsD = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM MATERIAL", (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const findMaterialD = (id) => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM MATERIAL WHERE id = ?", id, (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const updateMaterialD = (data, id) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE MATERIAL SET
            fornecedor = ?,
            produto = ?,
            quantidade = ?,
            valor = ?
            WHERE id = ?`,
      [data.fornecedor, data.produto, data.quantidade, data.valor, id],
      (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      }
    );
  });
};

const deleteMaterialD = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM MATERIAL WHERE id = ?`, id, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Material deletado com sucesso!");
      }
    });
  });
};

export {
  createMaterialD,
  findAllMaterialsD,
  findMaterialD,
  updateMaterialD,
  deleteMaterialD,
};
