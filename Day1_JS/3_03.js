const a=["thoe","Ironman"];
const b=["superman","flash"];
// a.push(b);
console.log(a);
//if we push like this,this will create anotehr array in a,not merge it

const c=a.concat(b);//this will merge both array and store them in new array
console.log(c);

//Spread operaor
const ne=[...a,...b];//we can merge although more than two arrays
console.log(ne);

//flat operator
const arr=[1,2,[3,4],[5,6,[7,8]]];
const useable=arr.flat(3);//we can give Infinity to resolve all brackets and form single array
console.log(useable);

//check for array
console.log(Array.isArray("Hitesh"));//check if array or not

//convert in array
console.log(Array.from("Raghav"));//convert string in arry

console.log(Array.from({name:"Raghav"}));//object converting in array convert value to array but gives empty array so we have to specify about what we want to convert in array key or value

let score1=100;
let score2=90;
let score3=18;
console.log(Array.of(score1,score2,score3));//convert set o elements to array


//if object created from constructor,it is singleton but if it created from literals then no singleton form,its multiple instances created
//singelton form
Object.create;

//Object literals
const user={
    name:"Raghav",
    "full name":"Raghav verma",
    email:"vvrma923@gmail.com",
    isLogin:false,
}
console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);//we cannot access fulll name without using this method

//Use symbol in as obeject's key
const mysm=Symbol("key1");
const usersym={
    name:"Raghav",
    [mysm]:"mykey",
    "full name":"Raghav verma",
    email:"vvrma923@gmail.com",
    isLogin:false,
}
// console.log(usersym[mysm]);//correct syntax
// console.log(usersym);
// Object.freeze(usersym);//change make will not propogate after using this
// usersym.name="Ram";
// console.log(usersym);

//function
usersym.greeting=function(){
    console.log("Hello i am raghav");
}
console.log(usersym.greeting);//return function anynonymous becuase we got function reference and to get function we have to call it using ()
console.log(usersym.greeting());

//access object value in function 
usersym.greet=function(){
    console.log(`hello i am ${this["full name"]}`);
}
console.log(usersym.greet());