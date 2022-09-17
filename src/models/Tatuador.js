import {TatuadorList, tatuadorSelectById, insertData, updateById, deleteById} from "../DAO/TatuadorDAO.js"

export class Tatuador {
    constructor(tatuador_id, name, contact, availability){
        this.tatuador_id = tatuador_id;
        this.name = name;
        this.contact = contact;
        this.availability  = availability;
    }
}

export const getTatuador = async () => {
    try {
        const data = await TatuadorList();
        if (!data) throw new Error("Não foi possível encontrar os tatuadores!")
        return data
    } catch (error) {
        throw error
    }
}

export const selectData = async (id) => {
    try {
        const data = await tatuadorSelectById(id);
        if (!data) throw new Error("Não foi possível encontrar os tatuadores!")
        return data
    } catch (error) {
        throw error
    }
}

export const insertD = async (data) => {
    try {
        const d = await insertData(data);
        if (!data) throw new Error("Não foi possível inserir os dados!")
        return data
    } catch (error) {
        throw error
    }
}

export const updateD = async (newtatuador, tatuador_id) => {
    try {
        const data = await updateById (newtatuador, tatuador_id)
        if(!data) throw new Error("Não foi possível atualizar!")
        return data
    } catch (error) {
        throw error
    }
}

export const deleteD = async (id) => {
    try {
        const clients = await deleteById(id);
        if (!clients) throw new Error("Can not delete tatuador");
        return Tatuador;
  } catch (error) {
    throw error;
  }
}