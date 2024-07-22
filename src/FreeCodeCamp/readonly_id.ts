
let myUser: User = {
    _id: 2,
    name: "h",
    age: 24,
  
  }
  

class MyClass {
    readonly _id: number;

    constructor(id: number) {
        this._id = id;
    }
}

const obj = new MyClass(123);
console.log(obj._id);  // Imprime: 123

// Intentar modificar la propiedad dará un error
//obj._id = 456;  // Error: Cannot assign to '_id' because it is a read-only property.


