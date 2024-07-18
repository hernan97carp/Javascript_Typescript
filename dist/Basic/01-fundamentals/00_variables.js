"use strict";
// String variable
const hello = "hello";
// Integer variable
const my_int_variable = 2;
// Float variable
const my_float_variable = 4.2;
// Boolean variable
const isActive = true;
// Array of numbers
let numbers = [1, 2, 3];
//or
let list_numbers = [1, 2, 3];
// Null variable
let n = null;
// Undefined variable
let u = undefined;
// Variable with any type
let anything = 42;
// Tuple with a string and a number
const tuple = ["hello", 10];
// Enum for colors
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// Using the enum
const color = Color.Green;
// Object representing a person with name and age properties
const person = {
    name: "John",
    age: 30
};
// Union type variable that can be a number or a string
let union = "hello";
union = 10;
let userId = 101;
userId = "ABC123";
// User object following the User interface
const user = {
    name: "Alice",
    age: 25
};
