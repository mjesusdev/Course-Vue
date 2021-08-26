import { getHeroeById } from './08-imp-exp';

console.log('Inicio 🚀');

new Promise( (resolve, reject) => { 
    console.log('cuerpo de la promesa');
    reject('Promesa resulta con ERROR!!');
})
.then( console.log )
.catch( console.log )

console.log('Fin 😥');

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroeById( id );

            if ( hero ) {
                resolve( hero );
            } else {
                reject(`No se encontró el héroe con id ${id}`);
            }

        }, 2000);
    });
};

getHeroByIdAsync(1)
    .then( h => {
        console.log(`El héroe es ${ h.name }`);
    })
    .catch( console.log )