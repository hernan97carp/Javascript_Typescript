"use strict";
//Ejemplo de un Array de Objetos
// Definición de una clase `Book`
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `${this.title} by ${this.author}`;
    }
}
// Array de objetos de tipo `Book`
let library = [
    new Book("The Hobbit", "J.R.R. Tolkien"),
    new Book("1984", "George Orwell"),
    new Book("To Kill a Mockingbird", "Harper Lee")
];
// Acceder y mostrar la información de cada libro en la biblioteca
library.forEach(book => {
    console.log(book.getInfo());
});
// Definición de una clase `Product`
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
// Array de objetos de tipo `Product`
let products = [
    new Product("Laptop", 1200),
    new Product("Smartphone", 800),
    new Product("Headphones", 150)
];
// Iterar sobre el array de productos y mostrar la información de cada producto
products.forEach(product => {
    console.log(`Product: ${product.name}, Price: $${product.price}`);
});
