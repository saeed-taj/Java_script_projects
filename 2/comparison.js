"use strict"

// these conversions are not good practice makes confusion     
console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true

console.log(undefined == 0);// fasle
console.log(undefined > 0); //false
console.log(undefined < 0);// false

// ===

console.log("3" == 3); // true
console.log("3" === 3);//this will check the data type as well, so it will return false datatypes are different