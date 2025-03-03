let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// Date is object type

let mycratedDate=new Date("2023-01-14");
console.log(mycratedDate.toLocaleString());

// Date.now() return date in microsecond value; 
console.log(Math.floor(Date.now()/1000));

//costomize time
let newDate=new Date();
newDate.toLocaleDateString('default',{
    weekday:"long",
})

//Arrays in js have not fixed size,we can use different datatypes in arrays.
//In arrays shallow copy is created
const myar=new Array(1,2,3,4);
console.log(myar[1]);

myar.shift();//remove element at first of array
myar.unshift(9);//add element at first of array

myar.includes(9);//return boolean by checking elementin array
myar.indexOf(3);//return index of elememt in array

const newarr= myar.join();//convert array in string by bind it.

const sliarr=myar.slice(1,3);//it does not include 2nd index given

const spliarr=myar.splice(1,3);//it includes second index also and it manipulates the original array but slice not
