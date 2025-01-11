const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { name, email, details } = req.body;
    console.log(`Nombre: ${name}, Email: ${email}, Detalles: ${details}`);
    res.send('Formulario enviado con éxito.');
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
