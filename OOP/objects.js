


function func_object(num){

    return num * 5;
}


func_object.power = 2;


console.log(func_object(5));
console.log(func_object.power);
console.log(func_object.prototype);



function createUser(userName , account){
    this.userName = userName;
    this.account = account;

}


createUser.prototype.increase = function(){
    this.account++;
}

createUser.prototype.printme = function(){

    console.log(`result : ${this.account}`);

}


//so there are 2 function calling the ssame function so oit wil increase first one or the second to tackle this issue 
//we have this i have used this.account++ which(this) tells the current context the go to there who called you 

const result   = new createUser("saeed"   , 250);
const result_2 = createUser("saeed_2" , 350);

// when i didn't write the new keyword it didn't work so what new do actually : 
//think that 'new' keyword creates a new objects {} and then createUser has been called then the prototype 
// gets into the newly object and then function executes and then this keyword works
 
result.printme();




/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 

This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound

to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this,

the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value

(object, array, function, etc.), the newly created object is returned.

*/