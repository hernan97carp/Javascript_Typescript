//En javascript las funciones pueden ser igualadas, TypeScript junto con su nueva sintáxis
//también permite este comportamiento como por ejemplo, utilizando las fat arrow:
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; // OK
//x = y; // Error
//let x = () => ({name: 'Alice'});
//let y = () => ({name: 'Alice', location: 'Seattle'});
//x = y; // OK
//y = x; // Error porque x()nmo tiene la propiedad location
