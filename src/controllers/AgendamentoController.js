import AgendamentoModel from "../models/AgendamentoModel.js";

// import { selectTatuador } from "../models/TatuadorModel.js";

import {
  findAllAgendamentosD,
  createAgendamentoD,
  findAgendamentoD,
  updateAgendamentoD,
  deleteAgendamentoD,
} from "../DAO/AgendamentoDAO.js";

const createAgendamento = async (req, res) => {
  const { descricao, data, horario, tatuadorId, clientId, preco } = req.body;
  // const { id } = req.params;

  try {
    // let tatuador = await selectTatuador(id);

    // if (!tatuador) {
    //   return res.json({ message: "Tatuador inexistente!" });
    // }

    const Agendamentos = await createAgendamentoD(req.body);
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
