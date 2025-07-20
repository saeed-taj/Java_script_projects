          "use strict"


const map = new Map();  // map using object means new makes new object 

map.set('PK' , "Pakistan");
map.set('US' , "United states of america");
map.set('FR' , "France");

console.log(map);


for (const [key , value] of map){

    console.log(key , ':-' , value);
}



// example
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);