// Definición de la clase Constructores
export class Constructores {
    // Propiedades de la clase
    private name: string;
    private age: number;

    // Constructor de la clase
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Método para mostrar la información de la persona
    public displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    // Método para establecer un nuevo nombre y devolverlo
    public setName(newName: string): string {
        this.name = newName;
        return newName;
    }
}