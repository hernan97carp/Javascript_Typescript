import { Constructores } from "./08.constructores";

// Crear una instancia de la clase Constructores
let name = "hernan";
let age = 22;
let constructores = new Constructores(name, age);

// Llamar al método displayInfo para mostrar la información
constructores.displayInfo(); // Muestra la información en la consola

// Establecer un nuevo nombre
let returnNewName = constructores.setName("Lucas");
console.log(returnNewName); // Muestra el nuevo nombre

// Volver a mostrar la información actualizada
constructores.displayInfo(); // Muestra la información actualizada