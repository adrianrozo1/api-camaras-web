import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Importar rutas
import clientesRoutes from "./routes/clientes.routes.js";
import proveedoresRoutes from "./routes/proveedores.routes.js";
import camarasRoutes from "./routes/camaras.routes.js";
import eventosRoutes from "./routes/eventos.routes.js";

// Importar modelos
import ClientesModel from "./models/Cliente.js";
import ProveedoresModel from "./models/Proveedor.js";
import CamarasModel from "./models/Camara.js";
import EventosModel from "./models/Evento.js";



dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

// Rutas base
app.use("/api/clientes", clientesRoutes);
app.use("/api/proveedores", proveedoresRoutes);
app.use("/api/camaras", camarasRoutes);
app.use("/api/eventos", eventosRoutes);


// Ruta raíz
app.get("/", async (req, res) => {
    try {
    const clientes = await ClientesModel.find();
    const proveedores = await ProveedoresModel.find();
    const camaras = await CamarasModel.find();
    const eventos = await EventosModel.find();

    res.send(`
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>📹 API de Cámaras - Visualización</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #fafafa;
            margin: 20px;
            color: #333;
          }
          h1 {
            text-align: center;
            color: #007bff;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
          th {
            background-color: #007bff;
            color: white;
          }
          tr:hover {
            background-color: #f1f1f1;
          }
          .section-title {
            color: #333;
            background: #eee;
            padding: 10px;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <h1>📹 Panel de Datos - API Cámaras</h1>

        <h2 class="section-title">👥 Clientes</h2>
        ${createTable(clientes, ["_id", "nombre", "correo", "telefono", "direccion", "fecha_registro"])}

        <h2 class="section-title">🏢 Proveedores</h2>
        ${createTable(proveedores, ["_id", "nombre", "contacto", "telefono", "correo", "ciudad"])}

        <h2 class="section-title">🎥 Cámaras</h2>
        ${createTable(camaras, ["_id", "marca", "modelo", "ubicacion", "estado"])}

        <h2 class="section-title">🚨 Eventos</h2>
        ${createTable(eventos, ["_id", "descripcion", "camara", "fecha"])}

      </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send(`<h1>❌ Error cargando datos</h1><p>${error}</p>`);
  }
});

// Función para crear tablas HTML dinámicamente
function createTable(data, fields) {
  if (!data || data.length === 0) {
    return "<p>No hay datos disponibles.</p>";
  }

  const headers = fields.map(f => `<th>${f}</th>`).join("");
  const rows = data.map(item => `
    <tr>${fields.map(f => `<td>${item[f] ?? ""}</td>`).join("")}</tr>
  `).join("");

  return `
    <table border="1">
      <thead><tr>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}


// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🟢 Servidor corriendo en el puerto ${PORT}`);
  console.log(`🌐 API disponible en: http://localhost:${PORT}`);
});
