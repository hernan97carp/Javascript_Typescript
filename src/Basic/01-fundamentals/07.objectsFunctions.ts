interface Course {
    name: string;
    price: number;
}

function createCourse(): Course {
    return { name: "react", price: 3989 };
}



interface Course {
    name: string;
    price: number;
}
let objectCreateCourse = createCourse();

// Usando Object.keys() para obtener un array de las claves del objeto
Object.keys(objectCreateCourse).forEach((key) => {
    // `Object.keys(objectCreateCourse)` devuelve un array con las claves del objeto, como ['name', 'price']
    // El método forEach recorre cada clave en el array
    // `key` es la clave actual (por ejemplo, 'name')

    // Accede al valor usando la clave actual. `key as keyof Course` asegura que TypeScript trata `key` como una clave válida de `Course`
    const value:string | number = objectCreateCourse[key as keyof Course];
    
    // Imprime la clave y el valor en formato 'clave: valor'
    console.log(`${key}: ${value}`);
    console.log(typeof value)
});
