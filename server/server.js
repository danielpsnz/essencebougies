const express = require('express'); // Import the express module
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const app = express(); // This initialises the Express app, which will handle the routing and processing of requests
const PORT = 3000; // Define a port for the server to listen on
const sequelize = require('./config/dbConfig');

app.use(bodyParser.json());

// Use routes
app.use('/products', productRoutes);

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

sequelize.authenticate()
  .then(() => console.log('Database connected.'))
  .catch(err => console.error('Unable to connect to the database:', err));
