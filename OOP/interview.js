


const descriptor = Object.getOwnPropertyDescriptor(Math , "PI");

console.log(descriptor);



const myObject = {

    name : " saeed ",
    roll: 3023,
    batch : 23,
    onCampus : true,

    myFunc : function(){
        console.log("i am stupid!");
    }
}

//console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject , "name"));

 // my own defined properties
Object.defineProperty(myObject , "name" , {
    writable : false,
    enumerable : false
})


console.log(Object.getOwnPropertyDescriptor(myObject , 'name'));

// for of loop
//to iterate through the objects in which there are functions creates problems so i will use Object.entries to iterate
// for the iteration basically in objects and a if else statement to avoid print fuction

for (let [key , value] of Object.entries(myObject) ){
   if(typeof value !== 'function'){

console.log(`${key} : ${value}`);
   }


    
}