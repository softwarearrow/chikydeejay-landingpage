const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'l07565602@gmail.com',
        pass: 'cbjk apat szjb tkmy'
    }
});
app.post('/submit', (req, res) => {
    console.log('Datos recibidos:', req.body);

    const { name, email, details } = req.body;

    if (!name || !email || !details) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }

    const mailOptions = {
        from: '"Formulario de Contacto" <l07565602@gmail.com>',
        to: 'l07565602@gmail.com',
        subject: 'Nuevo Mensaje del Formulario de Contacto',
        text: `Nombre: ${name}\nEmail: ${email}\nDetalles: ${details}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).send('Error al enviar el correo.');
        }
        console.log('Correo enviado:', info.response);
        res.send('Formulario enviado y correo enviado con éxito.');
    });
});
app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
