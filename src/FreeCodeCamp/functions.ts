
function addTwo(num: number):number{
    return num + 2;
    
}
console.log(addTwo(2));

function getUpper(val: string):string{
    return val.toUpperCase()
}

console.log(getUpper("hello"));


const getHello = (s:string):string => {return `${s}`} 


const heros = ["Thor", "SpiderMan", "Batman"]


let listOfHeroes:string[] = heros.map((hero):string => {
    return `The heroes are ${hero}`
})
console.log(listOfHeroes);

console.log(typeof listOfHeroes);

