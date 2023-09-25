const express = require('express');
const cors = require('cors');

const app = express();

// Configurar CORS para permitir solicitudes desde 'http://localhost:4200'
app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Resto de la configuración del servidor

app.listen(8000, () => {
  console.log('Servidor en ejecución en el puerto 8000');
});
