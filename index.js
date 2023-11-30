require('dotenv').config();

const express = require('express');
const app = express();

// Importación de router
const productsRouter = require('./src/routes/products.route');
// Importación de middleware de CORS
const cors = require('./src/middlewares/cors.middleware');

// Configuración de middleware de CORS
app.use(cors);

// Configuración de middleware de body parser
app.use(express.json());

// Configuración de router
app.use('/products', productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API escuchando en el puerto ${PORT}`);
});
