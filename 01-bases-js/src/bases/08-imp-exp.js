import superHeroes from '../data/heroes';

export const getHeroeById = ( id ) => {
    return superHeroes.find( hero => hero.id === id );
}

const getHeroeByOwner = ( owner ) => {
    return superHeroes.filter( hero => hero.owner === owner );
}

console.log( superHeroes );
console.log( getHeroeById(1) );
console.log( getHeroeByOwner('Marvel') );