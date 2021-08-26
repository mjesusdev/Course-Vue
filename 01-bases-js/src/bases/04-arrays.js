const array = [1,2,3,4];
array.push( 5 );

const array2 = [...array];
array2.push( 6 ); 

const array3 = array2.map( function ( item ) {
    return item * 2;
});

array3.push( 14 );

console.log(array);
console.log(array2);
console.log(array3);