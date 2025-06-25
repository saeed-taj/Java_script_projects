

"use strict"


// slicing a string

let name = "saeedtaj";

let substring_name = name.substring(0,4); //saee

console.log(substring_name); // saee

console.log(name.substring(4,8));  //dtaj

let sliced_name = name.slice(0 , 8);  
//(-8 , 8 ) = saeedtaj or (0 , 8 ) = saeedtaj
//(-7 , 8 ) = aeedtaj  or (1 , 8 ) = aeedtaj
//(-6 , 8 ) = eedtaj   or (2 , 8 ) = eedtaj
//(-5 , 8 ) = edtaj    or (3 , 8 ) = edtaj
//(-4 , 8 ) = dtaj      or (4 , 8 ) = dtaj

// for higher than -8 it will starts from the zero index
console.log(sliced_name);


// trim 

let name_with_space = "   saeed   ";
console.log(name_with_space); //   saeed
console.log(name_with_space.trim()); //saeed


let url = "https://www.google.com/saeed%30taj/saeed%20taj";

console.log(url.replace('%30' , '__'));

