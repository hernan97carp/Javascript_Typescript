## Funciones

### Función que hace referencia al objeto que la llama

```typescript
setTimeout(function() {
    console.log(this); // Elemento que llama a la función
}, 2000);
Función flecha donde this hace referencia al objeto que contiene la función
typescript

setTimeout(() => {
    console.log(this); // Elemento que contiene esta función
}, 2000);
Ejemplos sobre cómo evitar el tipo Any y filtrar solo por los tipos de datos que necesitamos
Para poder definir tipos utilizaremos el operador lógico |.

typescript

function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return Array(padding.length + 1).join(" ") + value;
    }
    // Si existiera Any tendríamos que controlar la excepción
    // Como buenas prácticas y ya que este código al fin y al cabo
    // será JavaScript y es vulnerable a inyección, siempre está bien
    // realizar el control de las posibles excepciones
    throw new Error(`Expected string or number, got '${padding}'`);
}

console.log(padLeft("hello", "aaa")); // Ejemplo de función con texto -> Funciona
console.log(padLeft("hello", 5)); // Ejemplo de función con número -> Funciona
console.log(padLeft("hello", true)); // Ejemplo de función con booleano -> NO FUNCIONA (no compila)
Parámetros opcionales en TypeScript
TypeScript admite que se declaren parámetros opcionales de la siguiente forma utilizando ?:

typescript

// Compiled with --strictNullChecks
function validateEntity(e?: Entity) {
    // Throw exception if e is null or invalid entity
}

function processEntity(e?: Entity) {
    validateEntity(e);
    let s = e!.name; // Assert that e is non-null and access name
}
Igualación de funciones
En JavaScript, las funciones pueden ser igualadas. TypeScript, junto con su nueva sintaxis, también permite este comportamiento, como por ejemplo utilizando las fat arrow:

typescript

let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; // OK
x = y; // Error

let x = () => ({name: 'Alice'});
let y = () => ({name: 'Alice', location: 'Seattle'});
x = y; // OK
y = x; // Error porque x() no tiene la propiedad location


//TypeScript admite que se declaren parametros opcionales de la siguiente forma utilizando
//la ? :
