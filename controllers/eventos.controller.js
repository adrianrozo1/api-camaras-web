import Evento from "../models/Evento.js";

export const obtenerEventos = async (req, res) => {
  const eventos = await Evento.find()
    .populate("id_camara")
    .populate("id_cliente");
  res.json(eventos);
};

export const crearEvento = async (req, res) => {
  const nuevo = new Evento(req.body);
  await nuevo.save();
  res.json({ mensaje: "Evento creado 🟦", data: nuevo });
};

export const actualizarEvento = async (req, res) => {
  const { id } = req.params;
  const actualizado = await Evento.findByIdAndUpdate(id, req.body, { new: true });
  res.json({ mensaje: "Evento actualizado 🟧", data: actualizado });
};

export const eliminarEvento = async (req, res) => {
  const { id } = req.params;
  await Evento.findByIdAndDelete(id);
  res.json({ mensaje: "Evento eliminado 🟥" });
};
