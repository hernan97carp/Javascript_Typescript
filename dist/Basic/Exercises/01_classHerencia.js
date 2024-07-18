"use strict";
//Definir una clase Animal y una clase Dog que herede de Animal, con métodos 
//y propiedades específicos.
class Animal {
    constructor(name) {
        this.name = name;
    }
    makesound() {
        console.log("Generic animal sound");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makesound() {
        console.log("woff");
    }
}
let mydog = new Dog("dog");
mydog.makesound();
