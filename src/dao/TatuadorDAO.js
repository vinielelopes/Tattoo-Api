import db from "../database/dbconfig.js";

const TatuadorList = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM TATUADOR", (error, rows) => {
            if (error) {
                reject(error)
            } 
            else {
                resolve(rows)
            }
        });
    });
}


const insertData = (data) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO TATUADOR (tatuador_id, name, contact, availability) VALUES (?,?,?,?,?)`, Object.values(data), (error, rows) => {
            if (error) {
                reject(error)
            } 
            else {
                resolve({
                    "msg": `Data successfully inserted!`,
                    "tatuador": rows,
                    "erro": false,
                });
            }
        });
    });
}

const tatuadorSelectById = (id) => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM TATUADOR WHERE tatuador_id = ?`, [id],  (erro, rows) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(rows);
        }
      });
    });
};
  
const updateById = (newTatuador, tatuador_id) => {
    return new Promise( (resolve, reject) => {
        db.run( `UPDATE TATUADOR SET name = ?, contact = ?, availability = ? WHERE tatuador_id = ${tatuador_id}`, Object.values(newTatuador), (error) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(`Tatuador updated`)
                }
            }
        )
    })  
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM TATUADOR WHERE tatuador_id = ?`, id, (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve("Tatuador removed!");
        }
      });
    });
};


export { TatuadorList, tatuadorSelectById, insertData, updateById, deleteById } ;