"use strict"

// chunk 1 started
const obj1 = { a : 1 , b : 2};
const obj2 = { c : 3 , d : 4};

//const obj3 = Object.assign({} , obj1 , obj2);// this will merge the two objects
//console.log(obj3); // { a: 1, b: 2, c: 3 }
// this will merge the two objects and assign to obj3

const obj3 = {...obj1 , ...obj2}; // this will merge the two objects
console.log(obj3);

// chunk 1 ended

// chunk 2 started
const linkedin = {};

linkedin.name = "wajahat taj";
linkedin.id = 3023;
linkedin.email = "saeedtaj00@gmail.com";


console.log(Object.keys(linkedin));
console.log(Object.values(linkedin));
console.log(linkedin);

//chunk 2 ended


// chunk 3 started
const users = [

{
name : "wajahat taj",
id : 3023,
email : "saeedtaj00@gmail.com",
}
,
{
name : "wajahat taj",
id : 3023,
email : "saeedtaj00@gmail.com",
}
,
{
name : "wajahat taj",
id : 3023,
email : "saeedtaj00@gmail.com",
}

];



