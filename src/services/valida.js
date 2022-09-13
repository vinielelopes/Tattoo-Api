import { findMaterialD } from "../dao/MateriaisDAO.js";

export const validaId = async (id) => {
  const res = await findMaterialD(id);
  console.log(res);
  if (res !== undefined) {
    return true;
  } else {
    return false;
  }
};