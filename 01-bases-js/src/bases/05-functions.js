/* const saludar = ( nombre ) => {
    return `Hola ${ nombre }`;
} */

const saludar = ( nombre = 'Peter' ) => `Hola ${ nombre }`;

const nombre = 'Tony';

/* console.log( saludar( nombre ) ); */

const getUser = () => ({
    uid: '12345',
    username: 'Tony001'
});

/* console.log( getUser() ); */

const heroes = [{
    id: 1,
    name: 'Spiderman'
}, {
    id: 2,
    name: 'Superman'
}];

const exists = heroes.some( hero => hero.id === 1 )

console.log( exists );