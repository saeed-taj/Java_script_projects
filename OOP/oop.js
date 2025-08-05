


const object = {

   name   : "Saeed",
   yearns : "germany", 
   major  : function(){
    console.log("software Engineering");
    console.log(`name : ${this.name}`);
   } 
  

}


console.log(object.name);
console.log("where you will go after 2.5 years : ", object.yearns);


// more on this

function user(userName , loggedIn , loginCount){
    
    this.userName = userName;
    this.loggedIn = loggedIn;
    this.loginCount = loginCount;
 
this.country = function(){
   console.log(`Name : ${this.userName} `);
}

    return this;
}

const save = user("saeed" , true , 23);
const save2 = user("saeed2" , false , 34);
console.log(save);


// so when we console.log the save it prints the save2 to tackle this problem 
// we will use new keyword which gives new instance every time 

const save3 = new user("saeed" , true , 23);
const save4 = new user("saeed2" , false , 34);
console.log(save3.constructor);



// study instanceof  task todo