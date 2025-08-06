
let myName = "saeed     "; //5 letters + 5 spaces = 10 

console.log(myName.length);

console.log(myName.trim().length);



let heros = ["Thor" , "spiderman"];

let heros_obj = {
      
    Thor : "hammer",
    spiderman : "fight" ,
    
    university : function(){
//if i want to tell that i want to print the spiderman which is inside this object i will use this keyword
        console.log(`university is : ${this.spiderman}`);
    }



}

object.prototype.saeed = function(){
    console.log("Hi i am saeed taj from FAST University");
}

Array.prototype.Hisaeed = function(){

    console.log("this is me");
}
//if we give power to the object and we want to access the function saeed using the array we can
heros_obj.saeed();
heros.saeed();

// if we give power to the array we cant access the function Hisaeed through the object 
heros.Hisaeed();
heros_obj.Hisaeed();