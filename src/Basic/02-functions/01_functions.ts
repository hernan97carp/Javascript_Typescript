// Function that logs a message to the console and returns nothing
function logMessage(message: string): void {
    console.log(message);
  }
  
  // Correct usage of the function
  logMessage("hello world");
  
  // If you try to return a value, TypeScript will give an error
  function logMessageWithError(message: string): void {
    console.log(message);
    // return "This will cause an error";  // Uncommenting this line will cause a TypeScript error
  }
  
  // Incorrect usage (TypeScript will give an error if uncommented)
  // let result = logMessage("hello world");
  // console.log(result);  // 'result' will be of type 'void'


  // para poder definir tipos utilizaremos el O lógico
function padLeft(value: string, padding: string | number) {
  if(typeof padding === "number"){
  return Array(padding + 1).join(" ") + value;
  }
  if(typeof padding === "string") {
  return Array(padding.length + 1).join(" ") + value;
  }
  // Si existiera Any tendriamos que controlar la excepción
  // Como buenas practicas y ya que este código al fin y al cabo
  // será javascript y es vulnerable a inyeción siempre está bien
  // realizar el control de las posibles excepciones
  throw new Error(`Expected String or number, got '${padding}' `);
  }
  console.log(padLeft("hello", "aaa")); // Ejemplo de función con texto -> Funciona
  console.log(padLeft("hello", 5)); // Ejemplo de función con número -> Funciona
 //console.log(padLeft("hello", true)); // Ejemplo de función con texto -> NO FUNCION

 padLeft("hola","asd");



 interface Entity {
  name: string;
  // Aquí podrían haber más propiedades
}


function validateEntity(e?: Entity) {
  if (!e) {
      throw new Error("Entity is null or undefined");
  }
  // Aquí podrían haber más validaciones para comprobar la validez de la entidad
}

function processEntity(e?: Entity) {
  validateEntity(e);
  let s = e!.name; // Assert that e is non-null and access name
  }
  