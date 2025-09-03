


const promiseOne = new Promise(function(resolve , reject){

//Do an async Task
//DB Calls , cryptography , network

setTimeout(function(){

    console.log("Async Task is complete");
    resolve(); // this connets to the then function an can also pass the parameters 
} , 1000)
    

})

// This then is directly linked with the resolve
promiseOne.then(function(){

    console.log("promise is complete");

})



new Promise(function(resolve , reject){

setTimeout(function(){

    console.log("Async Task 02");
    resolve();

} , 1000)

}).then(function(){

    console.log("promise 02 is consumed or Async 02 resolved");
})




const promiseThree = new Promise(function(resolve , reject){


setTimeout(function(){
    //console.log("Async 03 is complete");
resolve({ name : " saeed taj" , email : "saeedtaj00@gmail.com" }); 
} , 1000)    


})

promiseThree.then(function(user){

    console.log(user);
})







const promiseFour = new Promise(function(resolve , reject){

   setTimeout(function(){

   let error = false;

if(error != true){

    resolve({ name : "saeed" , height : "5.11ft"});
}

else {
        reject('ERROR SomeThing Went Wrong');
    }

    }, 1000)


})


//this === "Who is calling the function?"


 const returned = promiseFour.then( (user) => {

    console.log(user);
    return user.name;

}).then((user) => {

    console.log(user);

}).catch(function(error){

    console.log(error)

}).finally( () => { // fially is like the default that it prints the promise has resolved or rejected 

    console.log("The Promise is either Resolved or Rejected");

})   

// this is called chainging that geting the returned values using .then() after returned by the first then() function
//console.log(username);





const promiseFive = new Promise(function(resolve , reject){

setTimeout(function(){

    let error = true;
    if (error != true){

    resolve({name : "saeed" , major : "Software Engineering" })    

    }

    else {
        reject('ERROR : Something went wrong')
    }


} , 1000)



});



// NOW i will do with another approach instead is promiseFive.then(function(){})


async function ConsumePromiseFive(){

    try{
    const waited = await promiseFive;
    console.log(waited);
}
catch(error){

    console.log(error);
}
}

ConsumePromiseFive();



async function getData(){

    try{    
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await response.json();
   console.log(data);   

}

catch(error){

    console.log(error);
}

}
getData();


// if i have to do this with the then() and catch() which was pretty easy 


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
return response.json();

}).then((data) => { 

    console.log(data);

}).catch((error) => {
    
    console.log(error); 

});



// if you want to link the promise five with the fetch()

// promiseFive
//   .then((user) => {
//     console.log("PromiseFive Resolved:", user);
//     return fetch('https://jsonplaceholder.typicode.com/users');
//   })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Fetched data:", data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

