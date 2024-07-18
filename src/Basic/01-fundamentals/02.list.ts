let list: {[key:string]: Number} = {a: 1, b: 2, c:3};
for(let i in list){
console.log(list[i]); // 1, 2, 3
}

let list2 = {a: 1, b: 2, c:3};
for(let i in list){
console.log(i); // a, b, c
}
