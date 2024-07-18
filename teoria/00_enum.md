# Enum en TypeScript

En TypeScript, un **enum** (abreviatura de enumeración) es un tipo de dato que permite definir un conjunto de valores con nombre. Los enums son útiles para representar un conjunto de opciones con nombres legibles en lugar de usar constantes numéricas o strings, mejorando así la legibilidad y el mantenimiento del código.

## Definición de un Enum

Puedes definir un enum usando la palabra clave `enum`. Aquí hay un ejemplo simple:

```typescript
enum Color {
  Red,
  Green,
  Blue
}
En este ejemplo, Color es un enum con tres miembros: Red, Green y Blue. De forma predeterminada, los miembros de un enum tienen valores numéricos que comienzan desde 0 y se incrementan en 1:

Color.Red tiene el valor 0
Color.Green tiene el valor 1
Color.Blue tiene el valor 2
Uso de un Enum
Puedes usar los enums para definir variables con valores restringidos a los miembros del enum:

typescript
Copy code
let color: Color = Color.Green;
console.log(color);  // Imprime 1
Enums con Valores Específicos
También puedes asignar valores específicos a los miembros de un enum:

typescript
Copy code
enum Status {
  Active = 1,
  Inactive = 0,
  Pending = -1
}
En este caso, Status.Active tiene el valor 1, Status.Inactive tiene el valor 0 y Status.Pending tiene el valor -1.

Enums de Cadenas
Además de los enums numéricos, TypeScript también permite definir enums de cadenas:

typescript
Copy code
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
Aquí, cada miembro del enum Direction está asignado a una cadena específica.

Acceso a Nombres de los Miembros
Puedes obtener el nombre del miembro de un enum a partir de su valor:

typescript
Copy code
enum Color {
  Red,
  Green,
  Blue
}

let colorName: string = Color[1];
console.log(colorName);  // Imprime "Green"
Ejemplo Completo
Aquí tienes un ejemplo completo que muestra cómo se pueden usar los enums en un programa TypeScript:

typescript
Copy code
// Definición de un enum numérico
enum Color {
  Red,
  Green,
  Blue
}

let color: Color = Color.Green;
console.log(`Color value: ${color}`);  // Imprime "Color value: 1"

// Definición de un enum con valores específicos
enum Status {
  Active = 1,
  Inactive = 0,
  Pending = -1
}

let status: Status = Status.Active;
console.log(`Status value: ${status}`);  // Imprime "Status value: 1"

// Definición de un enum de cadenas
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let direction: Direction = Direction.Left;
console.log(`Direction value: ${direction}`);  // Imprime "Direction value: LEFT"

// Obtener el nombre de un miembro del enum
let colorName: string = Color[1];
console.log(`Color name: ${colorName}`);  // Imprime "Color name: Green"
Los enums son una herramienta poderosa en TypeScript que ayuda a representar un conjunto fijo de valores con nombres significativos, mejorando así la claridad y la robustez del código.