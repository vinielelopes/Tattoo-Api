import { Router } from "express";
import {
  createMaterial,
  findAllMaterials,
  findMaterial,
  updateMaterialC,
  deleteMaterialC,
} from "../controllers/MateriaisController.js";

const router = Router();

router.post("/Material", createMaterial);
router.get("/Materials", findAllMaterials);
router.get("/Material/:id", findMaterial);
router.put("/Material/:id", updateMaterialC);
router.delete("/Material/:id", deleteMaterialC);

export default router;
