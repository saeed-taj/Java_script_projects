

class User{

    constructor(userName){

        this.userName = userName;
    }

    logMe(){
        console.log(`UserName is ${this.userName}`);
    }


}

class Teacher extends User{

    constructor(userName , email , password){
        
         super(userName);  // do not need to write this it will do automatically by itself
        
        this.email = email;
        this.password = password;
    }
  
    addCourse(){
        console.log(`new Course added : ${this.userName}`);
    }


}

const data = new Teacher("saeedTaj" , "saeedtaj00@gmail.com" , 11332);


data.addCourse();
console.log(data.userName);


const data_02 = new User("saeed");
//data_02.addCourse();  // checking that User the first function has the access to the addcourse or not
// and has not the access 

// now check for the logMe function which is inside the User function 
data_02.logMe();

// now check for the data has access of logMe or not it has access becasue it is inheriting from the User
data.logMe();

console.log(data === data_02);

console.log(data instanceof Teacher); // true because it is instance of Teacher

console.log(data_02 instanceof Teacher); // false not instance of Teacher

console.log(data instanceof User); // true because data is calling Teacher and Teacher is inheriting from the User 