import express from "express";
import {
  obtenerEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento
} from "../controllers/eventos.controller.js";

const router = express.Router();

router.get("/", obtenerEventos);
router.post("/", crearEvento);
router.put("/:id", actualizarEvento);
router.delete("/:id", eliminarEvento);

export default router;
