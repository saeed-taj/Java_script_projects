"use strict"

let date = new Date();

console.log(date.toString());
console.log(date.toISOString());

console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());


let mytimestamp = Date.now();

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

console.log(newDate.getMonth() + 1); // January is 0, December is 11
console.log(newDate.getDay());


newDate.toLocaleString('default' , {

    month : "long",
    weekday : "long",



} )

console.log(newDate.toLocaleString('default', { month: 'long' }));