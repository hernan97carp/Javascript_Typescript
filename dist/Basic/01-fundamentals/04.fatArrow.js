"use strict";
//En javascript las funciones pueden ser igualadas, TypeScript junto con su nueva sintáxis
//también permite este comportamiento como por ejemplo, utilizando las fat arrow:
let x = (a) => 0;
let y = (b, s) => 0;
y = x; // OK
//x = y; // Error
//let x = () => ({name: 'Alice'});
//let y = () => ({name: 'Alice', location: 'Seattle'});
//x = y; // OK
//y = x; // Error porque x()nmo tiene la propiedad location
