import mongoose from "mongoose";

const eventosSchema = new mongoose.Schema({
  descripcion: { type: String, required: true },
  camara: { type: String },
  fecha: { type: Date, default: Date.now },
});

const eventosModel = mongoose.model("Evento", eventosSchema);
export default eventosModel;
