const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
// Habilitar CORS para el frontend en localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',  // Permitir solicitudes solo de este origen
  methods: 'GET, POST, PUT, DELETE',  // Métodos permitidos
  allowedHeaders: 'Content-Type, Authorization'  // Cabeceras permitidas
}));
app.use(express.json()); // Para poder manejar JSON en las solicitudes

// Configura la conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conectado a la base de datos MySQL');
    }
});

// Ruta para obtener los productos
app.get('/api/productos', (req, res) => {
  const query = 'SELECT * FROM productos';
  db.query(query, (err, results) => {
      if (err) {
          console.error('Error al obtener productos:', err);  // Muestra el error en consola
          return res.status(500).send('Error al obtener productos');
      }
      res.json(results);  // Devuelve los resultados como JSON
  });
});

const port = 5001;  // Asegúrate de que el backend está en el puerto correcto
app.listen(port, () => {
    console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
