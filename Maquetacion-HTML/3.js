// Obtener los registros desde localStorage
const registros = JSON.parse(localStorage.getItem('registros')) || [];
const cardContainer = document.getElementById('card-container');

function crearTarjeta(persona) {
    // Crear la estructura de una tarjeta
    return `
        <div class="card">
            <h3>${persona.nombre}</h3>
            <p><strong>Cédula:</strong> ${persona.cedula}</p>
            <p><strong>Email:</strong> ${persona.email}</p>
            <p><strong>Teléfono:</strong> ${persona.telefono}</p>
            <p><strong>Dirección:</strong> ${persona.direccion}</p>
            <p><strong>Discapacidad:</strong> ${persona.discapacidad}</p>
        </div>
    `;
}
// Renderizar todas las tarjetas
function mostrarRegistros() {
    if (registros.length === 0) {
        cardContainer.innerHTML = `
            <div class="card">
                <h3>No hay registros disponibles</h3>
                <p class="no-data">Realiza una búsqueda para encontrar registros.</p>
            </div>
        `;
    } else {
        cardContainer.innerHTML = registros.map(crearTarjeta).join('');
    }
}
// Llamar a la función para mostrar registros al cargar la página
mostrarRegistros();
