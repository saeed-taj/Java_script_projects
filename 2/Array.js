"use strict"



let Arrays = [0 , 1 , 2 , 3 , 4 , 5];


const Array2 = new Array(1 , 2 , 3 , 4 , 5);

console.log(Arrays[2]);

Arrays.push(6);  //add 6 to the end of Array
Arrays.push(7);  // add 7 to the end of array

Arrays.pop(); // removes the last element of array


Arrays.unshift(8); // add 8 to the start of the array
Arrays.shift(); // removes the first element of the array

// slice and splice 

// sliceing on array
let Array3 = [1 , 2 , 3 , 4 , 5 ] ;
console.log("A" , Array3); // original array

console.log(Array3.slice(1 , 2)); // slicing

// splicing on Array

console.log(Array3.splice(1 , 2)); // splicing
console.log("A" , Array3); // original array after splicing


// spread operator
const Heros = ["superman" , "batman" , "spiderman" , "wanda" ];

const Villains = ["joker" , " thanos" , "loki"];

const all = [...Heros , ...Villains];

console.log(all); // spread operator to combine two arrays

