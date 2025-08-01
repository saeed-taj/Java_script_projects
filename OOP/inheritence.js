"use strict"

const User = {

    name : "Messi", 
    goals : "infinite"

}

const Teacher = {
      video : true
}

const TeachingSupport = {
      Ta : false
}

const courses = {
      course : "Data Structures",
      fullTime : true,
      __proto__: TeachingSupport
 // this is simply inheritance that __proto__ is keyword to inherit something from the source 
 
    }

//Another example of the inheritance outside of the object 

Teacher.__proto__ = User;

// here the Teacher has inherited data from the user object 
// but these were old ways to inherit something


// modern method for inheritance 

Object.setPrototypeOf(TeachingSupport , Teacher);
// Bacically the TeachingSupport object is inheriting from the Teacher means the TeachingSupport has the access
// of the Teacher Object means can access the data inside the Teacher object





let anotherUser = "hasnain";

String.prototype.trueLenght = function(){
 console.log(`${this}`);
console.log(`${this.name}`);
console.log(`True lenght is : ${ this.trim().length}`);
}

anotherUser.trueLenght();

"saeedtaj".trueLenght();
"Fast-nuces ".trueLenght();