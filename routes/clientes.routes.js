import express from "express";
import {
  obtenerClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente
} from "../controllers/clientes.controller.js";

const router = express.Router();

router.get("/", obtenerClientes);       // 🟩 Leer
router.post("/", crearCliente);         // 🟦 Crear
router.put("/:id", actualizarCliente);  // 🟧 Actualizar
router.delete("/:id", eliminarCliente); // 🟥 Eliminar

export default router;
