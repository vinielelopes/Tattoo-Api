import express from "express";

import { clientsList, clientSelectById, updateData, deleteData, insertData  } from "../controllers/ClienteController.js";
const router = express.Router();


router
    .get("/clients", clientsList)
    .get("/clients/:id", clientSelectById)
    .put("/clients/:id", updateData)
    .delete("/clients/:id", deleteData)
    .post("/clients/", insertData)
    
export default router ;   



