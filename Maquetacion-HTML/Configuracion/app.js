// Función para añadir un nuevo usuario
function addUser(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const userTableBody = document.getElementById('userTableBody');

    // Crear una nueva fila para la tabla
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${username}</td>
        <td>${email}</td>
        <td>${role}</td>
        <td>
            <button onclick="deleteUser(this)">Eliminar</button>
        </td>
    `;
    
    userTableBody.appendChild(newRow);

    // Limpiar el formulario
    document.getElementById('addUserForm').reset();
}

// Función para eliminar un usuario
function deleteUser(button) {
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
}

// Función para cambiar la contraseña
function changePassword(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    // Validar las contraseñas
    if (newPassword !== confirmPassword) {
        message.textContent = 'Las contraseñas no coinciden.';
        message.style.color = 'red'; // Mensaje de error
        return;
    }

    // Aquí puedes añadir la lógica para cambiar la contraseña

    message.textContent = 'Contraseña cambiada con éxito.';
    message.style.color = 'green'; // Mensaje de éxito
}

// Función para gestionar copias de seguridad
function createBackup() {
    const message = document.getElementById('message');
    // Aquí puedes añadir la lógica para crear una copia de seguridad
    message.textContent = 'Copia de seguridad creada con éxito.';
    message.style.color = 'green'; // Mensaje de éxito
}

function deleteBackup() {
    const message = document.getElementById('message');
    // Aquí puedes añadir la lógica para eliminar una copia de seguridad
    message.textContent = 'Copia de seguridad eliminada con éxito.';
    message.style.color = 'green'; // Mensaje de éxito
}

// Función para guardar preferencias del sistema
function savePreferences(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const theme = document.getElementById('theme').value;
    const logoFile = document.getElementById('logo').files[0];
    const preferencesMessage = document.getElementById('preferencesMessage');

    // Aquí puedes agregar lógica para manejar el archivo del logo,
    // como enviarlo a un servidor o guardarlo en localStorage.

    // Mensaje de éxito
    preferencesMessage.textContent = `Preferencias guardadas: Tema ${theme}.`;
    preferencesMessage.style.color = 'green'; // Mensaje de éxito
}

// Agregar eventos a los formularios y botones
if (document.getElementById('addUserForm')) {
    document.getElementById('addUserForm').addEventListener('submit', addUser);
}

if (document.getElementById('changePasswordForm')) {
    document.getElementById('changePasswordForm').addEventListener('submit', changePassword);
}

if (document.getElementById('backupButton')) {
    document.getElementById('backupButton').addEventListener('click', createBackup);
}

if (document.getElementById('deleteBackupButton')) {
    document.getElementById('deleteBackupButton').addEventListener('click', deleteBackup);
}

if (document.getElementById('preferencesForm')) {
    document.getElementById('preferencesForm').addEventListener('submit', savePreferences);
}
