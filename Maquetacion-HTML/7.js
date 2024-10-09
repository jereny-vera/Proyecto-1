// Simulación de credenciales
const validUsername = "admin";
const validPassword = "password123";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar credenciales
    if (username === validUsername && password === validPassword) {
        // Redirigir a la página de administración
        window.location.href = "administracion.html"; // Cambiar a la URL de la página de administración
    } else {
        // Mostrar mensaje de error
        document.getElementById('errorMessage').innerText = "Nombre de usuario o contraseña incorrectos.";
    }
});
