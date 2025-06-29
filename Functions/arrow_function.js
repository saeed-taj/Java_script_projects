



const user = {
     
    name : " wajahat taj",
    course : "Data_structures",
    price : 40000,

  about_course : function(){
        console.log(`${this.name} , is studying ${this.course} `); 
        console.log(user);

  }

}


user.about_course();
user.name = "saeedtaj";
user.about_course();



// const about = function(){
//      let user = "chris evans"
//      console.log(user);


// }


const shop = () => {
     let user = "zayn malik";
console.log(this.user);  // undefined

}
shop();



const charging = (percent , isfull) => {

    return percent + isfull;  // when we use the return that is explicit return
}

console.log(charging(37 , 100));





// implicit return 

const charged = (percent , isfull) => percent + isfull;

//const charged = (percent , isfull) => (percent + isfull); // can also do this

console.log(charged(37 , 100));
