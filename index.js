require('dotenv').config();

const express = require('express');
const app = express();

// Importación de router
const productsRouter = require('./src/routes/products.route');

// Configuración de middleware de body parser
app.use(express.json());

// Configuración de router
app.use('/products', productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API escuchando en el puerto ${PORT}`);
});
