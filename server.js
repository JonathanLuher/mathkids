const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


// Configuración de conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',       // Cambia si tu servidor no está en localhost
    user: 'root',      // Usuario de MySQL
    password: '1234', // Contraseña de MySQL
    database: 'mathkids',    // Nombre de la base de datos
    port: 3306               // Puerto de MySQL (por defecto 3306)
});

// Intentar conectarse a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos.');
    }
});

// Endpoint para obtener preguntas de prueba
// Endpoint para obtener preguntas de prueba
app.get('/questions', (req, res) => {
  connection.query('SELECT * FROM questions', (err, results) => {
      if (err) {
          res.status(500).send('Error al realizar la consulta.');
          console.error(err);
      } else {
          res.json(results); // Retorna las preguntas en formato JSON
      }
  });
});


// Iniciar el servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
