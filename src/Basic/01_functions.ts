// Function that logs a message to the console and returns nothing
function logMessage(message: string): void {
    console.log(message);
  }
  
  // Correct usage of the function
  logMessage("hello world");
  
  // If you try to return a value, TypeScript will give an error
  function logMessageWithError(message: string): void {
    console.log(message);
    // return "This will cause an error";  // Uncommenting this line will cause a TypeScript error
  }
  
  // Incorrect usage (TypeScript will give an error if uncommented)
  // let result = logMessage("hello world");
  // console.log(result);  // 'result' will be of type 'void'
