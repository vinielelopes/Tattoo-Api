import { clientsList, clientSelectById, insertData, updateById, deleteById } from "../dao/ClienteDAO.js"

export class Clients {
    constructor(id, name, contact, age, city){
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.age = age;
        this.city = city;
    }
}

export const getClients = async () => {
    try {
        const data = await clientsList();
        if (!data) throw new Error("Não foi possível encontrar os clientes!")
        return data
    } catch (error) {
        throw error
    }
}

export const selectData = async (id) => {
    try {
        const data = await clientSelectById(id);
        if (!data) throw new Error("Não foi possível encontrar os clientes!")
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

export const updateD = async (newClient, id) => {
    try {
        const data = await updateById (newClient, id)
        if(!data) throw new Error("Não foi possível atualizar!")
        return data
    } catch (error) {
        throw error
    }
}

export const deleteD = async (id) => {
    try {
        const clients = await deleteById(id);
        if (!clients) throw new Error("Can not delete client");
        return clients;
  } catch (error) {
    throw error;
  }
}