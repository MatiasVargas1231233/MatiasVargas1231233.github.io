
// Variables
let cantidadCursos = 5;
let usuarioLogueado = true;

// Constantes
const DESCUENTO = 0.1;

// Funciones
function calcularPrecioConDescuento(precio) {
    return precio * (1 - DESCUENTO);
}

// Métodos y Eventos
document.getElementById("conceptos").addEventListener("mouseover", function () {
    if (usuarioLogueado) {
        console.log("El usuario está interesado en los conceptos básicos.");
    } else {
        console.log("Solicitar inicio de sesión para acceder a los conceptos básicos.");
    }
});

// Ejemplo de condicional
if (cantidadCursos > 3) {
    console.log("¡Oferta especial! Más de 3 cursos seleccionados.");
} else {
    console.log("Seleccione al menos 3 cursos para obtener un descuento.");
}