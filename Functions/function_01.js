"use strict"




function add_numbers(num_1 , num_2){

    let sum = num_1 + num_2;

    console.log("Sum : ", sum);

    return sum;
}

let Result = add_numbers(5 , 6);

console.log("Result : " , Result );




function user_info(name){

    return `${name} got 'A' in Data structures and algorithms`;
}

console.log( user_info("Wajahat taj"));