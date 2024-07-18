## Genéricos

Los tipos genéricos son aquellos que, como las interfaces, no se verán compilados en JavaScript ya que solo están accesibles en tiempo de compilación. La manera adecuada de realizar la sobrecarga de métodos es con los tipos genéricos. Un ejemplo sería así:

### Versión TypeScript

```typescript
function echo<T>(arg: T): T {
    return arg;
}

let a = echo<number>(1); // El typeof es Number
let b = echo<string>("Hola mundo"); // El typeof es String
Versión JavaScript (Ya compilado)
javascript
Copy code
function echo(arg) {
    return arg;
}

var a = echo(1); // El typeof es Number
var b = echo("Hola mundo"); // El typeof es String
La diferencia entre esta forma y la otra es que, de esta forma, podríamos recibir cualquier tipo de objeto y no deberíamos especificar el tipo de objeto que esperamos. Esto está muy bien ya que está diseñado para los objetos que no son primitivos de JavaScript. Con esto evitamos el any y mejoraría la manera de realizar la sobrecarga (lejos de como sería en Java o C#).

Con los tipos genéricos se debe tener cuidado, ya que no todos los métodos están disponibles para todos los tipos de objetos.

TypeScript
typescript
Copy code
class Generic<T> {
    add: (x: T, y: T) => T;
}

let myGeneric = new Generic<number>();
console.log(myGeneric.add = function (x, y) { return x + y; });
console.log(myGeneric.add(3, 4));
JavaScript
javascript
Copy code
var Generic = (function () {
    function Generic() { }
    return Generic;
}());
var myGeneric = new Generic();
console.log(myGeneric.add = function (x, y) { return x + y; });
console.log(myGeneric.add(3, 4));
Como se puede apreciar en este ejemplo, podemos declarar una función dentro de una clase que devolverá lo que le pasemos por parámetro, permitiéndonos así modificar los returns de nuestras funciones según queramos.

Para poder pasar como parámetro a una función y asegurarnos de que ese parámetro tiene un método en concreto, deberemos implementar una interfaz y forzar al parámetro que se le pasará a la función a utilizar dicha interfaz.

TypeScript
Nota: Es muy importante que veáis que cuando se implementa una interfaz en un parámetro utilizamos la palabra reservada extends y no la palabra reservada implements.

Interfaz que asegura que el parámetro tenga el método length
typescript
Copy code
interface withLength {
    length: number;
}

// El parámetro hereda de la interfaz la cual fuerza al parámetro a tener el método length
function echo<T extends withLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// Esto funcionará
let a = echo("aaa");
let t = echo({ length: 2, name: "aa" });

// Esto NO funcionará
let b = echo(1);
JavaScript
javascript
Copy code
// El parámetro hereda de la interfaz la cual fuerza al parámetro a tener el método length
function echo(arg) {
    console.log(arg.length);
    return arg;
}

// Esto funcionará
var a = echo("aaa");
var t = echo({ length: 2, name: "aa" });

// Esto NO funcionará
var b = echo(1);
También podemos hacer que los atributos que intentamos modificar se encuentren dentro del tipo de objeto que se le pasa. Eso sería de la siguiente forma:

TypeScript
typescript
Copy code
function copyFields<T extends U, U>(source: T, target: U): U {
    for (let id in source) {
        if (target[id] != undefined) {
            source[id] = target[id];
        } else {
            target[id] = source[id];
        }
    }
    return target;
}

let a = { a: 1, b: 2, c: 3 };
let b = copyFields(a, { b: 10, c: 20 }); // Esto funcionará
let c = copyFields(a, { Q: 20 }); // Esto NO funcionará

console.log(b); // 1, 10, 20
console.log(c); // Lo devuelve si lo compilas a pesar de saber que está mal