
const person = {
    name: 'Tony',
    age: 45,
    codeName: 'IronMan'
}

const { name, age, codeName, power = 'No tiene poder' } = person;

const createHero = ({ name, age, codeName, power }) => 
    ({
        id: 123,
        name: name,
        age: age,
        codeName: codeName,
        power: power
    })

console.log( createHero( person ) );