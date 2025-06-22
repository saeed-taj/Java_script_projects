"use strict"


// stack is a memory allocation for primitive data types
// heap is a memory allocation for reference data types
// stack is a fixed size memory allocation
// heap is a dynamic size memory allocation

// stack is faster than heap

// stack is used for function calls and local variables
// heap is used for objects and arrays

let youtubename = "saeedtaj_youtube_channel";

let youtubename2 = youtubename;// copy by value
let another_name = "fast campus islamabad";

console.log(youtubename); // saeedtaj_youtube_channel
console.log(another_name);


// now for heap it is differnet 

let myobj = {

    name : "saeed",
    email : "saeedtaj00@gmail.com",

}

let myobj_2 = myobj;// copy by reference

myobj_2.email = "fastuniversity@gmail.com";

console.log(myobj.email); //fastuniversity@gmail.com
console.log(myobj_2.email); //fastuniversity@gmail.com