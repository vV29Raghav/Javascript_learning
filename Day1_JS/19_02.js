const id=Symbol('123');
const anotherid=Symbol('123');
console.log(id===anotherid);//return false as symbol represent uniqueness


// Objects
let myObbbbj={
    name:"hitesh",
    age:22
}


//String inperpolaration
let x=2;
console.log(`hello ${myObbbbj.name} and my id=${x}`);


const gamenam=new String('Raghav?verma');
console.log(gamenam.__proto__);//return object type

console.log(gamenam.charAt(2));

console.log(gamenam.indexOf('a'));

const dd=gamenam.substring(0,4);//it works with negative but not obey the rules
console.log(dd);

const anotrstrinf=gamenam.slice(-5,2);//we use slice beacuse it also helps to return string part if we given negative values so start from reverse

const kk="   hit    ";
console.log(kk.trim());//remove spaces from start and end.

const pp="https:?/Raghav%20verma";
console.log(pp.replace('%20','.'));//replace the first string with next string

console.log(pp.includes('Raghav'));//return ture if string present in pp;

console.log(gamenam.split('?'));//convert string in array saperted by separator

const bal=new Number(100);
console.log(bal);

console.log(bal.toString());//convert  number to string and we can sue all string functions on it

console.log(bal.toFixed(1));//return deimal upto 1;

const num=123.89;
console.log(num.toPrecision(3));//return 124 as it gives priority to numbers before decimal and it returns a string

const hun=1000000;
console.log(hun.toLocaleString('en-IN'));//return value with indian standards


console.log(Math.round(4.6));//rounding off number

console.log(Math.ceil(4.6));//return top value
console.log(Math.floor(4.6));//return lowest value

console.log(Math.random());//return value form 0 to 1
console.log(Math.floor(Math.random()*10)+1);//return value always gretaer or equal to 1;


const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));//this is like random number between min and max value

