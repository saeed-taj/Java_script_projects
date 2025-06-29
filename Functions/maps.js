          "use strict"


const map = new Map();
map.set('PK' , "Pakistan");
map.set('US' , "United states of america");
map.set('FR' , "France");

console.log(map);


for (const [key , value] of map){

    console.log(key , ':-' , value);
}

