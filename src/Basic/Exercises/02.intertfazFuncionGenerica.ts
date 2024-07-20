//Interface y Función Genérica
//Crear una interfaz Printable y una función genérica que imprima los elementos de un array que implementen esta interfaz.

// Definición de la interfaz `Printable`
interface Printable {
    print(): void; // La interfaz `Printable` define un método `print` que debe ser implementado por cualquier clase que la implemente.
}

// Función genérica `printAll`
function printAll<T extends Printable>(arr: T[]): void {
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
class Documents implements Printable {
    print(): void {
        console.log("Printing document..."); // Implementación del método `print` para la clase `Documents`
    }
}

// Clase `Invoice` que implementa la interfaz `Printable`
class Invoice implements Printable {
    print(): void {
        console.log("Printing invoice..."); // Implementación del método `print` para la clase `Invoice`
    }
}

// Creación de arrays de objetos de las clases `Documents` e `Invoice`
let documents: Documents[] = [new Documents(), new Documents()];
let invoices: Invoice[] = [new Invoice(), new Invoice()];


printAll(documents); // Llama a `print()` en cada objeto de `documents`, lo que imprime "Printing document..." varias veces.
printAll(invoices);  // Llama a `print()` en cada objeto de `invoices`, lo que imprime "Printing invoice..." varias veces.
