"use strict"


const mykey = "mykey";
const mysym = Symbol(mykey);

const myobject = {

    name : "wajahat",
    [mysym] : "!",
    age : 22,
    isAlive : true,
    hobbies : ["coding" , "reading" , "gaming"]


}

console.log(myobject[mysym]); // access the symbol property


myobject.greeting = function(){

    console.log(`Hello there, I am ${this.name}` );

}

myobject.greeting(); // call the function inside the object
console.log(myobject.age);