
const isAuthenticatedGuard = async( to, from, next ) => {
    return new Promise( () => {
        const random = Math.random() * 100

        if ( random > 50 ) {
            console.log('is authenticated');
            next()
        }
        else {
            console.log('blocked for the isAuthenticatedGuard', random);
            next({ name: 'pokemon-home' })
        }
    })
}

export default isAuthenticatedGuard