//Object Destructuring(common in react)
const onj={
    name:"Raghav",
    class:"g15",
    age:20
}
const {name:n}=onj;
console.log(n);

// where we se {} ,to destructure it


//In functions if we do not pass an argument in function(having string type) call then undefiined is returned
function logu(username){
    if(!username){
        console.log("Enter values");
        return;
    }
    return `${username} is logged in`;
}
console.log(logu());//return undefined


//...->Rest operator in case of function parameter passing returns array with all arguemnts passing
function cart( x,...num1){
    return num1;
}
console.log(cart(22,77,9));//return array 


//Pass Object in function
const user={
    username:"Raghav",
    age:20
}
function handleobj(anyobj){
    return `${anyobj.username} is my name is i am ${anyobj.age}`;
}
console.log(handleobj(user));
console.log(handleobj({
    username:"Ram",
    age:"20"
}));
//Typescript we use becuase there is handling case if like age parameter is not present in 


//Pass array in object
const arr=[1,2,34]
function arry(anyarr){
    return arr[2];
}
console.log(arry(arr));