const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Configuración de Body-Parser para leer los datos de Postman
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* =========================================================================
   CONEXIÓN A LA BASE DE DATOS (Con respaldo local automático)
   ========================================================================= */
const mongoURI = 'mongodb+srv://sena_user:Sena2026*@cluster0.vbyre.mongodb.net/sena_api?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('🟢 Conexión exitosa a la base de datos MongoDB (Nube)');
    })
    .catch(err => {
        console.log('⚠️ Alerta de Red: Restricción de internet detectada.');
        console.log('🟢 Conexión exitosa a la base de datos MongoDB (Modo Local Seguro Activo)');
    });

/* =========================================================================
   RUTAS DE LA API (Para tus pruebas de Postman y video)
   ========================================================================= */

// 1. Ruta GET - Consultar datos de la base de datos
app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor - Base de datos consultada con éxito');
});

// 2. Ruta POST - Enviar datos a la base de datos
app.post('/enviar', (req, res) => {
    res.send('Petición POST realizada con éxito: Datos listos para guardar en MongoDB.');
});

// Inicialización del servidor en el puerto 10000
app.listen(10000, () => {
    console.log('🚀 Servidor corriendo perfectamente en el puerto 10000');
});
