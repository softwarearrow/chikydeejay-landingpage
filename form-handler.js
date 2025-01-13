const form = document.querySelector('.contact-form');
const messageDiv = document.getElementById('formMessage');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    console.log('Mostrando el mensaje de éxito');
    messageDiv.style.display = 'block';
    messageDiv.textContent = 'Enviando...';

    const formData = new FormData(form);

    try {
        const response = await fetch('/submit', {
            method: 'POST',
            body: new URLSearchParams(formData),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const result = await response.text();
        if (response.ok) {
            messageDiv.textContent = '¡Formulario enviado con éxito!';
            messageDiv.style.color = 'green';
            form.reset();
        } else {
            messageDiv.textContent = `Error: ${result}`;
            messageDiv.style.color = 'red';
        }
    } catch (error) {
        messageDiv.textContent = 'Error al enviar el formulario. Por favor, inténtalo de nuevo.';
        messageDiv.style.color = 'red';
    }
});
