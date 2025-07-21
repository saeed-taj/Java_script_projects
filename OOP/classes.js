

class User {

   constructor(userName , email , password){

     this.userName = userName;
     this.email  = email;
     this.password = password;
   }
   
   encryptUser(){

    return `name is : ${this.userName}`
   }

   changeData(){

    return `email has been changed to : ${this.email.toUpperCase()}`;
   }
 


}


const data = new User("saeed" , "saeedtaj00@gmail.com" , 1234);

console.log(data.encryptUser());
console.log(data.changeData());



// behind the scene



function User_02(userName , email  , password){

    this.userName = userName;
     this.email  = email;
     this.password = password;
}


User_02.prototype.UserData = function(){
    return `${this.password}`;
}

User_02.prototype.UserData_set = function(){
    return `${this.email.toUpperCase()}`;
}

const data_02 = new User_02("saeed" , "saeedtaj00@gmail.com" , 1234);

console.log(data_02.UserData());
console.log(data_02.UserData_set());