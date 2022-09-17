import express from "express";

import { tatuadorList, tatuadorSelectById, updateData, deleteData, insertData  } from "../controllers/TatuadorController.js";
const tatuadorRouter = express.Router();


tatuadorRouter
    .get("/tatuador", tatuadorList)
    .get("/tatuador/:id", tatuadorSelectById)
    .put("/tatuador/:id", updateData)
    .delete("/tatuador/:id", deleteData)
    .post("/tatuador/", insertData)
    
export default tatuadorRouter ;   