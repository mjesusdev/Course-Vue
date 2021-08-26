const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: '35',
    direccion: {
        ciudad: 'New York',
        zip: 52233,
        lat: 14.3232,
        lng: 34.455234
    }
}

const persona2 = { ...persona }

persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);