import  {Tatuador, getTatuador, selectData, insertD, updateD, deleteD} from "../models/Tatuador.js";

export const tatuadorList = async (req, res) => {
    try {
         const Tatuador = await getTatuador();
         res.status(200).json(Tatuador)
    } catch (error) {
         res.status(400).json({
             "msg" : error.message,
             "erro" : "true"
         });
    }
}

export const tatuadorSelectById = async (req, res) => {
  const id = req.params.id;
  try {
    const clients = await selectData(id);
    res.status(200).json({ clients });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

export const updateData = async (req, res) => {
  const {NAME, CONTACT, AVAILABILITY} = req.body;
  const tatuador_id = req.params.id; 
  try {
    const newTatuador = new Tatuador( NAME, CONTACT, AVAILABILITY) 
    const updated = await updateD(newTatuador, tatuador_id)
    res.status(200).json(updated)
  } catch (error) {
    res.status(404).json({
      "mensagem": error.message,
      "erro": true
    })
  }
}

export const deleteData = async (req, res) => {
     try {
          const del = await deleteD(req.params.id);
          res.status(200).json({del})
     } catch (error) {
          res.status(400).json({
              "msg" : error.message,
              "erro" : "true"
          })
     }
}

export const insertData = async (req, res) => {
     const { tatuador_id, name, contact, availability} = req.body;
   
     try {
       const newData = await insertD(req.body);
       res.status(201).json({ newData });
     } catch (error) {
       res.status(400).json({
         message: error.message,
         erro: "true",
       });
     }
};