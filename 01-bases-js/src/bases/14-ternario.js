
let firstName;
let lastName = 'La';

console.log(`${ firstName || 'No firstName' } ${ lastName || 'No lastName' }`);

const isActive = true;

const message = ( isActive ) ? 'Active' : 'Inactive';

/* if ( isActive ) {
    message = 'Active';
} else {
    message = 'Inactive';
} */

console.log(message);