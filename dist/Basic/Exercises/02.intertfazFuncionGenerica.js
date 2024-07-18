"use strict";
// Función genérica `printAll`
function printAll(arr) {
    // Explicación de la función:
    // - `<T extends Printable>`: Esto indica que `T` es un tipo genérico que debe extender (implementar) la interfaz `Printable`.
    //   En otras palabras, `T` puede ser cualquier tipo que tenga el método `print()` definido.
    // - `(arr: T[])`: El parámetro `arr` es un array de elementos de tipo `T`.
    // - `: void`: La función no devuelve nada (void).
    // Iteración sobre cada elemento del array `arr`
    arr.forEach(item => item.print());
    // - `arr.forEach(item => ...)`: Itera sobre cada elemento `item` del array `arr`.
    // - `item.print()`: Llama al método `print()` de cada elemento `item`.
}
// Clase `Documents` que implementa la interfaz `Printable`
class Documents {
    print() {
        console.log("Printing document..."); // Implementación del método `print` para la clase `Documents`
    }
}
// Clase `Invoice` que implementa la interfaz `Printable`
class Invoice {
    print() {
        console.log("Printing invoice..."); // Implementación del método `print` para la clase `Invoice`
    }
}
// Creación de arrays de objetos de las clases `Documents` e `Invoice`
let documents = [new Documents(), new Documents()];
let invoices = [new Invoice(), new Invoice()];
// Llamadas a la función `printAll` con los arrays creados
printAll(documents); // Llama a `print()` en cada objeto de `documents`, lo que imprime "Printing document..." varias veces.
printAll(invoices); // Llama a `print()` en cada objeto de `invoices`, lo que imprime "Printing invoice..." varias veces.
