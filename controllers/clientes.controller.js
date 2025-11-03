import Cliente from "../models/Cliente.js";

// 🟩 GET - Leer todos
export const obtenerClientes = async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
};

// 🟦 POST - Crear
export const crearCliente = async (req, res) => {
  const nuevo = new Cliente(req.body);
  await nuevo.save();
  res.json({ mensaje: "Cliente creado 🟦", data: nuevo });
};

// 🟧 PUT - Actualizar
export const actualizarCliente = async (req, res) => {
  const { id } = req.params;
  const actualizado = await Cliente.findByIdAndUpdate(id, req.body, { new: true });
  res.json({ mensaje: "Cliente actualizado 🟧", data: actualizado });
};

// 🟥 DELETE - Eliminar
export const eliminarCliente = async (req, res) => {
  const { id } = req.params;
  await Cliente.findByIdAndDelete(id);
  res.json({ mensaje: "Cliente eliminado 🟥" });
};
