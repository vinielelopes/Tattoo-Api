import AgendamentoModel from "../models/AgendamentoModel.js";

import { selectData }   from "../models/Tatuador.js";

import { selectData as selectDataCliente} from "../models/ClienteModel.js";

import {
  findAllAgendamentosD,
  createAgendamentoD,
  findAgendamentoD,
  updateAgendamentoD,
  deleteAgendamentoD,
} from "../dao/AgendamentoDAO.js";

const createAgendamento = async (req, res) => {
  const { descricao, data, horario, tatuadorId, clientId, preco } = req.body;
  const { idCliente } = req.params;
   const { id } = req.params;

  try {
     let tatuador = await selectData(id);
     let cliente = await selectDataCliente(idCliente);

      if (!tatuador || !cliente) {
       return res.json({ message: "Agendamento inválido!" });
     }

    const Agendamentos = await createAgendamentoD({
      descricao: descricao,
      data: data,
      horario: horario, 
      tatuadorId: id,
      clienteId: idCliente,
      preco: preco
    });
    res.status(200).json({
      Agendamentos,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

const findAllAgendamentos = async (req, res) => {
  try {
    const Agendamentos = await findAllAgendamentosD();
    res.status(200).json({ Agendamentos });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

const findAgendamento = async (req, res) => {
  const id = req.params.id;
  try {
    const Agendamentos = await findAgendamentoD(id);
    res.status(200).json({ Agendamentos });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

const updateAgendamento = async (req, res) => {
  const { id } = req.params;
  const { descricao, data, horario, tatuadorId, clienteId, preco } = req.body;

  // const { id } = req.params;
  try {
    const oldAgendamento = await findAgendamentoD(id);

    const dataAgendamento = new AgendamentoModel(
      id,
      descricao || oldAgendamento[0].DESCRICAO,
      data || oldAgendamento[0].DATA,
      horario || oldAgendamento[0].HORARIO,
      tatuadorId || oldAgendamento[0].TATUADOR_ID,
      clienteId || oldAgendamento[0].CLIENTE_ID,
      preco || oldAgendamento[0].PRECO
    );

    console.log(oldAgendamento);
    console.log(dataAgendamento);

    const Agendamentos = await updateAgendamentoD(dataAgendamento);
    res.status(201).json({ Agendamentos });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

const deleteAgendamento = async (req, res) => {
  try {
    const Agendamentos = await deleteAgendamentoD(req.params.id);
    res.status(200).json({ Agendamentos });
  } catch (erro) {
    res.status(400).json({
      message: erro.message,
      erro: "true",
    });
  }
};

export default {
  findAllAgendamentos,
  createAgendamento,
  updateAgendamento,
  findAgendamento,
  deleteAgendamento,
};
