

function User(username){
     
    this.username = username;
console.log("called");
}


function createUser(username , email , password){
    User.call(this, username);

    this.email = email;
    this.password = password;

    
}

const me = new createUser("saeed" , "saeedtaj00@gmail.com" , "123");

console.log(me);

