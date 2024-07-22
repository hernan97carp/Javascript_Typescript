export class Calculator {
    private sum: number;
    private rest: number;
    private divide: number;
    private multiply: number;

    constructor(sum: number = 0, rest: number = 0, divide: number = 1, multiply: number = 1) {
        this.sum = sum;
        this.rest = rest;
        this.divide = divide;
        this.multiply = multiply;
    }

    // Implementación de la función Sum
    public Sum(a: number, b: number): number {
        this.sum = a + b;
        return this.sum;
    }

    // Implementación de la función Rest (Resta)
    public Rest(a: number, b: number): number {
        this.rest = a - b;
        return this.rest;
    }

    // Implementación de la función Divide
    public Divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        this.divide = a / b;
        return this.divide;
    }

    // Implementación de la función Multiply
    public Multiply(a: number, b: number): number {
        this.multiply = a * b;
        return this.multiply;
    }
}