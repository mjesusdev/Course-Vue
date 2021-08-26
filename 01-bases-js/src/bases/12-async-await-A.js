
const miPromesa = () => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            resolve('Tenemos un valor en la promesa');
        }, 1000);
    });
}

const medirTiempoAsync = async () => {
    try {
        console.log('Inicio');
    
        const respuesta = await miPromesa();
        console.log(respuesta);
    
        console.log('Fin');
    
        return 'fin de medir tiempo async'
    } catch (error) {
        throw 'Error en medirTiempoAsync'
    }
}

medirTiempoAsync()
    .then( valor => console.log('THEN Exitoso:', valor))
    .catch( error => console.log('Error:', error ))