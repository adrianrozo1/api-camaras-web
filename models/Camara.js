import mongoose from "mongoose";

const camarasSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  ubicacion: { type: String },
  estado: { type: String, default: "Activa" },
});

const camarasModel = mongoose.model("Camara", camarasSchema);
export default camarasModel;
