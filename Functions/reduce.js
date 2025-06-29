



const array = [ 1 , 2 , 3 , 4 ];

const newresult = array.reduce( function (acc , curr_val){
    console.log( `accumulator : ${acc} and current value : ${curr_val}` );
   
    return acc + curr_val;

},0 );

console.log(newresult);


// by arrow function

const result = array.reduce( (acc , curr_val) => acc + curr_val , 0 );

console.log(result);