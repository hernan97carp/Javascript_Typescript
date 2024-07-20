// Uso promesas y async/await para simular la carga de datos desde una API.

// Esta función `fetchData` simula una llamada a una API que tarda 2 segundos en responder.
function fetchData(): Promise<string[]> {
    return new Promise(resolve => {
        // Utilizo `setTimeout` para simular un retraso en la respuesta de la API.
        setTimeout(() => {
            // Después de 2 segundos, resuelvo la promesa con un array de datos.
            resolve(["data1", "data2", "data3"]);
        }, 2000);
    });
}

// Esta es una función asíncrona `getData` que obtiene los datos usando `await`.
async function getData(): Promise<void> {
    try {
        // Espero a que la promesa de `fetchData` se resuelva y almaceno los datos en la variable `data`.
        let data = await fetchData();
        // Una vez que los datos se han cargado, los imprimo en la consola.
        console.log("Data loaded: ", data);
    } catch (error) {
        // Si ocurre algún error durante la carga de datos, lo atrapo y lo imprimo en la consola.
        console.log("Error fetching data: ", error);
    }
}

// Llamo a la función `getData` para iniciar el proceso de carga de datos.
getData();