const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConfig');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config(); // Carga las variables de entorno

connectDB(); // Conecta a la base de datos

const app = express();

app.use(express.json()); // Middleware para parsear JSON

// Rutas de la API
app.use('/api/use', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Middleware de manejo de errores
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000; // Define el puerto

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});