import mongoose from "mongoose";

const clientesSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  telefono: { type: String },
  direccion: { type: String },
  fecha_registro: { type: Date, default: Date.now },
});

const clientesModel = mongoose.model("Cliente", clientesSchema);
export default clientesModel;
