

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
