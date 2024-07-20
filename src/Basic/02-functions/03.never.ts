// Algunas funciones nunca devuelven un valor:

function fail(msg: string): never {
    throw new Error(msg);
  }
  
  // El tipo never representa valores que nunca se observan. En un tipo de retorno,
  // esto significa que la función lanza una excepción o termina la ejecución del programa.
  // never también aparece cuando TypeScript determina que no queda nada en una unión.
  function fn(x: string | number) {
    if (typeof x === "string") {
      // do something
    } else if (typeof x === "number") {
      // do something else
    } else {
      x; // has type 'never'!
    }
  }