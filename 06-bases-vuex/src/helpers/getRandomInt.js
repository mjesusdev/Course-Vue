const getRandomInt = () => {
    return new Promise( resolve => {
        const random = Math.floor( (Math.random() * 20) + 1 )

        setTimeout(() => {
            resolve(random)
        }, 2000 )
    })
}

export default getRandomInt

