import express from "express";
import {
  obtenerCamaras,
  crearCamara,
  actualizarCamara,
  eliminarCamara
} from "../controllers/camaras.controller.js";

const router = express.Router();

router.get("/", obtenerCamaras);
router.post("/", crearCamara);
router.put("/:id", actualizarCamara);
router.delete("/:id", eliminarCamara);

export default router;
