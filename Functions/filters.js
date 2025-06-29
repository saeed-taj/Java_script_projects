




const array = [1 , 2 , 3 , 4 , 5 , 6 , 7, 8];

const result = array.filter((num) => {
   return num > 4
});

console.log(result);


// by for each loop


const newarray = [];

array.forEach( (val) => {
    
    if(val >= 3){

        newarray.push(val);
    }
} );

console.log(newarray);


const information = [
{
    title : 'Book one' , genre : 'History' , publish : '2015'
},
{
    title : 'Book two' , genre : 'arts' , publish : '2018'
},
{
    title : 'Book three' , genre : 'History' , publish : '2022'
},
{
    title : 'Book four' , genre : 'Science' , publish : '2025 '
}

];
// filter returns the whole object 
const data = information.filter( (val) => val.genre === 'History' );

console.log(data);


// for extracting a single data from the array we will use this 

const titles = information.filter( (val) => val.genre === 'History'  ).map( (val) => val.title  );

console.log(titles);

const publish = information.filter( (val) => val.publish > 2018 ).map( (val) => ({ title : val.title , genre : val.genre}) );
console.log(publish);