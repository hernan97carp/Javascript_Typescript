type Point = {
    x:number;
    y:number;
}

function printCoord(pt: Point){
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({x:100, y:100})

type IDD = number | string;


type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

const myCardDetails: cardDetails = {
    cardNumber: "1234-5678-9876-5432",
    cardDate: "12/24",
    cvv: 123
};

console.log(myCardDetails);

function printCardDetails(details: cardDetails): void {
    console.log(`Card Number: ${details.cardNumber}`);
    console.log(`Card Date: ${details.cardDate}`);
    console.log(`CVV: ${details.cvv}`);
}

// Llamando a la función
printCardDetails(myCardDetails);