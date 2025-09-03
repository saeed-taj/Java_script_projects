

const randomColor = function(){

const hex = '123456789ABCDEF';
let color = '#';

for(let i = 0 ; i < 6 ; i++){
    
    color += hex[Math.floor(Math.random() * 16)];
}

return color;

};


let intervalId;

const starting = function(){

    if(intervalId == null){

    intervalId = setInterval(changeBg , 1000 );
}
    
    
    function changeBg (){
        
        document.body.style.backgroundColor = randomColor();
    
    }
    
};


const stoping = function(){

    clearInterval(intervalId);
    intervalId = null;
};



document.querySelector('#start').addEventListener('click' , starting);
document.querySelector('#stopping').addEventListener('click' , stoping);