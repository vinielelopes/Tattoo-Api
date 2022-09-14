import { Router } from "express";
import {
  createMaterial,
  findAllMaterials,
  findMaterial,
  updateMaterialC,
  deleteMaterialC,
} from "../controllers/MateriaisController.js";

const materiaisRouter = Router();

materiaisRouter.post("/Material", createMaterial);
materiaisRouter.get("/Materials", findAllMaterials);
materiaisRouter.get("/Material/:id", findMaterial);
materiaisRouter.put("/Material/:id", updateMaterialC);
materiaisRouter.delete("/Material/:id", deleteMaterialC);

export default materiaisRouter;
