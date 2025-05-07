"use strict"


// primitive data types 

// string , number , boolean , null , undefined , symbol , bigInt


const score = 565;

const score2 = 343.5;

//const id = symbol('123');
//const anotherId = symbol('123');

//console.log(id === anotherId); // false, because they are different symbols

//reference data types
// object , array , function

const heros =["spiderman" , "batman" , "superman"];

const myobj = {

    name : "saeed",
    age : 22,
    isActive : true,
    score : 545,
    hobbies : ["futsal" , "painting"],
    
    // nested object
    address : {   
        city : "Hunza",
        country : "Pakistan"
    },

    //function inside object
    // method
    greet : function(){

        console.log("hi saeed here");
    }
}


console.log(myobj.name); // saeed
console.log(myobj["name"]); // saeed // same as above

console.log(myobj.address.city);
console.log(myobj.greet()); // hi saeed here
console.log(myobj.hobbies[1]); // painting
console.log(myobj.hobbies[0]); // futsal


const myfunction = function(){


    console.log("hello world i am here");
}

console.log(typeof myfunction);// function

console.log(typeof myobj); // object

