"use Strict"; //treat all JS code as newer version

// alert(3+3);    we are using node.js not browser

// main documentation in tc39 website,mdn is not orignal documentation

// ecma script defines stanard for javascript, not write javascript
 
// Type of null is object,undefined is undefined
console.log(typeof "ha");

// Symbol datatype is used to define uniqueness ,mostly use it like figma and used in node.js mostly

let score="33";
let valinnum=Number(score);//convert string to number
console.log(valinnum);

let gg="33abc";
let valinnu=Number(gg);//convert string to number
console.log(typeof valinnu) //return number
console.log(valinnum);//return NaN,so this is issue in javascript

console.log("1"+2+2);// return 122
console.log(1+2+"2");//return 32
console.log(+true);//return 1;

let x=3;
const y=x++;//return x=4 and y=3

let m=3;
const n=++m;//return m=4 and n=4 also;

console.log(null>=0);//true
console.log(null>0);//false
//because ==,<><=>== work differently means equality check and comparison check works in differnet wa, as >= convert null to 0 so it comes true