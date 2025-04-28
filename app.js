const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware para parsear JSON
app.use(express.json());

// Usar todas las rutas definidas (incluye /, /estudiantes, y /personas)
app.use('/', routes);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Algo salió mal!');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
