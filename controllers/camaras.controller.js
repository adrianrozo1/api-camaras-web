import Camara from "../models/Camara.js";

export const obtenerCamaras = async (req, res) => {
  const camaras = await Camara.find().populate("id_proveedor");
  res.json(camaras);
};

export const crearCamara = async (req, res) => {
  const nueva = new Camara(req.body);
  await nueva.save();
  res.json({ mensaje: "Cámara creada 🟦", data: nueva });
};

export const actualizarCamara = async (req, res) => {
  const { id } = req.params;
  const actualizado = await Camara.findByIdAndUpdate(id, req.body, { new: true });
  res.json({ mensaje: "Cámara actualizada 🟧", data: actualizado });
};

export const eliminarCamara = async (req, res) => {
  const { id } = req.params;
  await Camara.findByIdAndDelete(id);
  res.json({ mensaje: "Cámara eliminada 🟥" });
};
