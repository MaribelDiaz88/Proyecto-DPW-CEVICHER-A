// server.js
require('dotenv').config();  // Línea 1: activa variables de entorno

const express = require('express');
const path = require('path');

const app = express();

// Obtener puerto desde .env o usar 3000 por defecto
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (HTML, CSS, JS, imágenes)
app.use(express.static(path.join(__dirname)));

// Ruta principal para servir index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Variable de entorno API_KEY: ${process.env.API_KEY || 'No definida'}`);
});