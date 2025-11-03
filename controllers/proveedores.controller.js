import Proveedor from "../models/Proveedor.js";

export const obtenerProveedores = async (req, res) => {
  const proveedores = await Proveedor.find();
  res.json(proveedores);
};

export const crearProveedor = async (req, res) => {
  const nuevo = new Proveedor(req.body);
  await nuevo.save();
  res.json({ mensaje: "Proveedor creado 🟦", data: nuevo });
};

export const actualizarProveedor = async (req, res) => {
  const { id } = req.params;
  const actualizado = await Proveedor.findByIdAndUpdate(id, req.body, { new: true });
  res.json({ mensaje: "Proveedor actualizado 🟧", data: actualizado });
};

export const eliminarProveedor = async (req, res) => {
  const { id } = req.params;
  await Proveedor.findByIdAndDelete(id);
  res.json({ mensaje: "Proveedor eliminado 🟥" });
};
