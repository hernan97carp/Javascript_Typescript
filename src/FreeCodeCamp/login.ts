import { User } from "./userInterface";

function signUpUser(name: string, email: string, isPaid: boolean = false): User {
    if (!name || !email) {
        throw new Error("Name and email are required.");
    }
    
    const newUser: User = {
        name,
        email,
        isPaid,
        createdAt: new Date()
    };

    console.log(`User signed up: ${JSON.stringify(newUser)}`);
    return newUser;
}



let loginUser = (name: string, email: string, isPaid: boolean = false): User => {
    if (!name || !email) {
        throw new Error("Name and email are required.");
    }

    const loggedInUser: User = {
        name,
        email,
        isPaid,
        createdAt: new Date() // Assuming we want to track when the user logs in
    };

    console.log(`User logged in: ${JSON.stringify(loggedInUser)}`);
    return loggedInUser;
}

// Ejemplo de uso:
const newUser = signUpUser("John Doe", "john.doe@example.com", true);
console.log(newUser);

const loggedInUser = loginUser("Jane Doe", "jane.doe@example.com", false);
console.log(loggedInUser);