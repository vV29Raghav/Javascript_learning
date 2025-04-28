//fetch method starts the process of fetching resourse from network returun promise which fulfilled once response is available
//fetch not reject http error like 404 and goes aldo to onfulfilled array that is variable array type stored first becasue fetch reject only network related error
///fetch follows abstraction

//OOP is coding differnet style

//everthing is object whether is function or anything 
function createUser(username,score){
    this.username=username;
    this.score=score;
}
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}
const chai=new createUser("chai",24);
const tea=createUser("tea",240);
chai.printMe();

//use of new eyword in context of this all above thing and when i make other nderstand that how it works then we do it usinig without new keyword and get error and then use new to solve this
//new keyword initiate the creation of new javascript object

//Javascript give constructor through new keyword.new keyword initiates creation of new javascript object


let my=["thor","spiderman"];
let heropower={
    thor:"hammer",
    spiderman:"sling",
    getSpider:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.raghav=function(){//it add custom function in object through prototype
    console.log(`raghav is present in all object`);
}
Array.prototype.hi=function(){
    console.log(`hi i am raghav`);
}
// my.raghav();
// heropower.hi();
 my.hi();


 //Prototype inheritance or protoype chaining
 const user= {
    name:"chai",
    email:"jasgduf@gmail.com"
 }
 const teacher={
    makeVedio:true
 }
 const teachingsupport={
    isAvail:false
 }
 const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:teachingsupport//proto is property help to access object  
 }
 teacher.__proto__=user;
 Object.setPrototypeOf(teachingsupport,teacher);
 let another="Chai     ";
 String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length us:${this.trim().length}`);
 }
 another.truelength();