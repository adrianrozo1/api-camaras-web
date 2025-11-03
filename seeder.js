import mongoose from "mongoose";
import dotenv from "dotenv";
import clientesModel from "./models/Cliente.js";
import proveedoresModel from "./models/Proveedor.js";
import camarasModel from "./models/Camara.js";
import eventosModel from "./models/Evento.js";

dotenv.config();

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado a MongoDB para insertar datos"))
  .catch((err) => console.error("❌ Error al conectar:", err));

// Datos iniciales
const clientes = [
  { nombre: "Adrian Angarita", correo: "adrian@example.com", telefono: "3125556677", direccion: "Arauca, Colombia" },
  { nombre: "Carley Mendoza", correo: "carley@example.com", telefono: "3131112233", direccion: "San Pablo" },
  { nombre: "Laura Torres", correo: "laura@example.com", telefono: "3001234567", direccion: "Bogotá" },
  { nombre: "Mario Pérez", correo: "mario@example.com", telefono: "3102223344", direccion: "Medellín" },
  { nombre: "Sofía Ruiz", correo: "sofia@example.com", telefono: "3201112233", direccion: "Cali" },
];

const proveedores = [
  { nombre: "Segurcam Ltda", contacto: "3129991122", correo: "contacto@segurcam.com", ciudad: "Bogotá" },
  { nombre: "VisionTech", contacto: "3104447788", correo: "ventas@visiontech.co", ciudad: "Medellín" },
  { nombre: "CamPro", contacto: "3001237788", correo: "info@campro.com", ciudad: "Cali" },
  { nombre: "SafeView", contacto: "3015556677", correo: "soporte@safeview.co", ciudad: "Barranquilla" },
  { nombre: "MaxCam Security", contacto: "3156677889", correo: "ventas@maxcam.com", ciudad: "Bucaramanga" },
];

const camaras = [
  { marca: "Hikvision", modelo: "DS-2CD2043G0", ubicacion: "Entrada principal", estado: "Activa" },
  { marca: "Dahua", modelo: "IPC-HFW2231T", ubicacion: "Parqueadero", estado: "Activa" },
  { marca: "TP-Link", modelo: "Tapo C200", ubicacion: "Oficina central", estado: "Inactiva" },
  { marca: "EZVIZ", modelo: "C6N", ubicacion: "Pasillo 2", estado: "Activa" },
  { marca: "Imou", modelo: "Ranger 2", ubicacion: "Recepción", estado: "Activa" },
];

const eventos = [
  { descripcion: "Movimiento detectado", camara: "Entrada principal", fecha: new Date() },
  { descripcion: "Acceso no autorizado", camara: "Parqueadero", fecha: new Date() },
  { descripcion: "Desconexión de cámara", camara: "Oficina central", fecha: new Date() },
  { descripcion: "Reinicio del sistema", camara: "Pasillo 2", fecha: new Date() },
  { descripcion: "Grabación manual iniciada", camara: "Recepción", fecha: new Date() },
];

// Función para insertar todo
const importarDatos = async () => {
  try {
    await clientesModel.deleteMany();
    await proveedoresModel.deleteMany();
    await camarasModel.deleteMany();
    await eventosModel.deleteMany();

    await clientesModel.insertMany(clientes);
    await proveedoresModel.insertMany(proveedores);
    await camarasModel.insertMany(camaras);
    await eventosModel.insertMany(eventos);

    console.log("✅ Datos insertados correctamente");
    process.exit();
  } catch (error) {
    console.error("❌ Error al insertar datos:", error);
    process.exit(1);
  }
};

importarDatos();
