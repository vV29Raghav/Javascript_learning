const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);
//this arise because we have to change hardcoded value of builtin things like PI value which cannot be overrided so solve this problem


const a={
    name:"chai",
    price:33,
    isAvail:true,
    order:function(){
     console.log("chai bani nhi")
    }
}
Object.defineProperty(a,'price',{
    // writable:false,
    enumerable:false//it stops iteration through loop for price
})
console.log(Object.getOwnPropertyDescriptor(a,"price"));


for(let [key,value] of Object.entries(a)){
    if(typeof value!=='function')
    console.log(`${key}:${value}`);
}




//getter and setter class based
class pp{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;//if we do this then it show call stack exceed because it cannot able to decide to set value according to constructor or this setter. so change the name like _email
    }
    get password(){
        return `${this._pass}Ram`
    }
    set password(value){
        this._pass=value;
    }
}
const ppppp=new pp("@gmail.com","1dsVU2");
console.log(ppppp.password);




//getter and setter without class means property based
function ppp(email,pass){
    this._email=email;
    this._pass=pass;
    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email=value;
        }
    })
}
const love=new ppp("rajav","eri12");
console.log(love.email);



//getter and setter object based.here we can use factory function
const use={
    _email:'h@haWWb',
    _pass:"absc",
    get email(){
        return this._email.toLowerCase()
    },
    set email(value){
        this._email=value;
    }
}
const tt=Object.create(use)//factory function
// console.log(tt.eil);
console.log(tt._email);
//in today use # to deny the access of the property





//Lexical scoping and closure
function makefunc(){
    const name="raghav";
    function display(){
        console.log(name);
    }
    return display;
}
//closure is when you return whole inner function from outer function then inner function return with its lexical scoping means with which inner related function connected with outer function property
const make=makefunc();
make();






