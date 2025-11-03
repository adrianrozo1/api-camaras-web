import express from "express";
import {
  obtenerProveedores,
  crearProveedor,
  actualizarProveedor,
  eliminarProveedor
} from "../controllers/proveedores.controller.js";

const router = express.Router();

router.get("/", obtenerProveedores);
router.post("/", crearProveedor);
router.put("/:id", actualizarProveedor);
router.delete("/:id", eliminarProveedor);

export default router;
