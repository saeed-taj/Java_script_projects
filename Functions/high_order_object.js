


const myobj = {
    
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby on rails',
    py : 'python'
       
}

for(const key in myobj){
    
    console.log(`${key} is for ${myobj[key]}`);
     
}


const languages = ["cpp" , "js" , "py" , "rb"];

for(const key in languages){

    console.log(key);
}


const language = ["cpp" , "js" , "py" , "rb"];

for(const key in language){

    console.log(language[key]);
}
