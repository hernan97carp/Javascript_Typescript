//Definir una clase Animal y una clase Dog que herede de Animal, con métodos 
//y propiedades específicos.

class Animal{
name:string
constructor(name:string) {
this.name = name   
}


 makesound():void {
    console.log("Generic animal sound")

}
}

class Dog extends Animal{

    constructor(name:string){
       super(name
       )
    }

makesound(): void {
    console.log("woff")
}

}

let mydog = new Dog("dog")
mydog.makesound();