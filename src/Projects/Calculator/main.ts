import { Calculator } from './calculator';


const calculator = new Calculator();


const resultSum = calculator.Sum(5, 3);
console.log(`Sum: ${resultSum}`); 


const resultRest = calculator.Rest(10, 4);
console.log(`Rest: ${resultRest}`); 


const resultDivide = calculator.Divide(20, 5);
console.log(`Divide: ${resultDivide}`);


const resultMultiply = calculator.Multiply(3, 7);
console.log(`Multiply: ${resultMultiply}`);