const nombre   = 'Jesús';
const apellido = 'Ojeda';

// With Back Ticks
const nombreCompleto = `${nombre} ${apellido}`;

// Without Back Ticks
/* const nombreCompleto = nombre + ' ' + apellido; */

console.log(nombreCompleto);

function getSaludo() {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`);