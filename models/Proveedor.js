import mongoose from "mongoose";

const proveedoresSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  contacto: { type: String },
  telefono: { type: String },
  correo: { type: String },
  ciudad: { type: String },
});

const proveedoresModel = mongoose.model("Proveedor", proveedoresSchema);
export default proveedoresModel;
