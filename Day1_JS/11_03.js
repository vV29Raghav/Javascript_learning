//browser scope is totally different from the scope we declare in code environment and run through node

// A closure in JavaScript is a function that remembers the variables from its outer scope even after the outer function has finished executing.Child can access parent function 

//Expression is function holding by variable ,which cannot be called before writing it

console.log(adddone(5));
function adddone(num){
    return num+1;
}

// addtwo(5);//It will give reference error due to syntax of writing the function that can not be access before initialization
const addtwo=function(num){
    return num+2;
}

//In Browser global object is window object ,so  if we try to pritn "this" in console of broswser we got window object but in console of node environment we got empty object if e try to print "this".If we try to print this object in functional scope then it giveThis refers to current context
function thisprint(){
    console.log(this);//print global object of node environment
}
thisprint();

function tprint(){
    let username="Ram";
    console.log(this.username);//this will give undefined 
}
tprint();


const thprint=()=>{
    let username="Ram";
    console.log(this.username);//this will give undefined 
}
thprint();

//difference between simple and arrow function is that simpel function can recieve arguments during calling but in arrow it is not allowed  .In arrow function we give argument usig rest operaort(...).Simple function can be used as constructor with new but arrow function not.this refers to global object in regular function and in arrow this is inherited from surrounding space

const thiprint=()=>{
    let username="Ram";
    console.log(this);
}
thiprint();

//Implicit function:arrow function in one line
const dd=(num1,num2)=>(num1+num2);
console.log(dd(33,3));


//return object in function using parantheseis 
