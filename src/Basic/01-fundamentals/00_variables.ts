// String variable
const hello: string = "hello";

// Integer variable
const my_int_variable: number = 2;

// Float variable
const my_float_variable: number = 4.2;

// Boolean variable
const isActive: boolean = true;

// Array of numbers
let numbers: number[] = [1, 2, 3];
//or
let list_numbers: Array<number> = [1, 2, 3];

// Null variable
let n: null = null;

// Undefined variable
let u: undefined = undefined;

// Variable with any type
let anything: any = 42;

// Tuple with a string and a number
const tuple: [string, number] = ["hello", 10];

// Enum for colors
enum Color {
  Red,
  Green,
  Blue
}

// Using the enum
const color: Color = Color.Green;



// Object representing a person with name and age properties
const person: { name: string; age: number } = {
  name: "John",
  age: 30
};

// Union type variable that can be a number or a string
let union: number | string = "hello";
union = 10;

// Type alias for a union type
type ID = number | string;
let userId: ID = 101;
userId = "ABC123";

// Interface for a user object
interface User {
  name: string;
  age: number;
}

// User object following the User interface
const user: User = {
  name: "Alice",
  age: 25
};



