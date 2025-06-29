


const array = [

{
 lang_name : "javascript",
 extension : "js"
},

{
lang_name : "c++",
extension : "cpp"
},

{
lang_name : "py",
extension : "python"
}

]

array.forEach( (val) => {

console.log(val.lang_name , `and extension is ${val.extension}`);


} );