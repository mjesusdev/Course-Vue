
const characters = ['Goku', 'Vegeta', 'Trunks'];

/* const g = characters[0];
const v = characters[1];
const t = characters[2]; */

// Print Goku 🚀
const [ goku, , ] = characters;

// Print Trunks 🚀
const [ , , trunks ] = characters;

console.log( goku );
console.log( trunks );

const returnArray = ([ letters, numbers ]) => {
    return [ letters, numbers ];
};

const [ letters, numbers ] = returnArray(['XYZ', 987]);

console.log( letters, numbers );