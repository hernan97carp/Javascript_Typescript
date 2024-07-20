//Manipulación de Arrays
//Utilizar métodos de array en TypeScript para manipular y filtrar datos.

let numbersA: number[] = [2,4,5,6,7,8,10];

//FILTRAR NUMBERS PARES
let evenNumbers = numbersA.filter(num => num % 2 === 0)

//reducir el array ala suma de sus elementos
let sum = evenNumbers.reduce((acc, curr) => {
    // `acc` es el acumulador que mantiene la suma de los elementos
    // `curr` es el valor actual del array que se está procesando
    return acc + curr; // Sumamos el acumulador y el valor actual
}, 0); // El `0` es el valor inicial del acumulador

console.log("Sum:", sum); // Salida: 30

// Explicación detallada del proceso de `reduce`:
// Para el array [2, 4, 6, 8, 10]:
// Inicialización: `acc = 0`
// Iteración 1: `acc + curr` => `0 + 2 = 2`
// Iteración 2: `acc + curr` => `2 + 4 = 6`
// Iteración 3: `acc + curr` => `6 + 6 = 12`
// Iteración 4: `acc + curr` => `12 + 8 = 20`
// Iteración 5: `acc + curr` => `20 + 10 = 30`
// El valor final de `acc` es `30`, que es la suma de todos los elementos del array.