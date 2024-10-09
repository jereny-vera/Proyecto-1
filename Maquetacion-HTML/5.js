// Obtener los registros desde localStorage
let registros = JSON.parse(localStorage.getItem('registros')) || [];

// Variables para almacenar los conteos de personas según el tipo de discapacidad
let totalRegistrados = registros.length;
let discapacidadVisual = 0;
let discapacidadAuditiva = 0;
let discapacidadMotora = 0;
let discapacidadIntelectual = 0;
let discapacidadOtra = 0;

// Recorrer los registros y contar por tipo de discapacidad
registros.forEach(persona => {
    switch (persona.discapacidad) {
        case 'visual':
            discapacidadVisual++;
            break;
        case 'auditiva':
            discapacidadAuditiva++;
            break;
        case 'motora':
            discapacidadMotora++;
            break;
        case 'intelectual':
            discapacidadIntelectual++;
            break;
        case 'otra':
            discapacidadOtra++;
            break;
        default:
            break;
    }
});

// Mostrar los valores en la interfaz
document.getElementById('totalRegistrados').innerText = totalRegistrados;
document.getElementById('discapacidadVisual').innerText = discapacidadVisual;
document.getElementById('discapacidadAuditiva').innerText = discapacidadAuditiva;
document.getElementById('discapacidadMotora').innerText = discapacidadMotora;
document.getElementById('discapacidadIntelectual').innerText = discapacidadIntelectual;
document.getElementById('discapacidadOtra').innerText = discapacidadOtra;
