

class User{

    constructor(userName){

        this.userName = userName;
    }

   logMe(){

    console.log(`userName : ${this.userName}`);
   }

   static myName(){  // if want to restrict the access of this function to outside of the class use static keyword
    return `12355`;
   }

}


const result = new User("saeed");

//console.log(result.myName()); // due to static we can not access the myName method


class Teacher extends User{


    constructor(userName , emailId){
        super(userName);
        this.emailId = emailId;
    }
}

const result_02 = new Teacher("saeed" , "saeedtaj00@gmail.com");

result_02.logMe();




