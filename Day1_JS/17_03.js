//Immediately Invoked Function Expression helps to get aside from global function or variable pollution or file contain dtabase need Immediate execution
(function ram(){
    console.log("DB Connected");//Named IIFE
})();
//()-> for function defination and ()->for execution 
//to end execution of iife we must use ;

((name)=>{
    console.log(`DB Connected ${name}`);
})('Raghav');


//Javascript Execution Context
// Code first converted to Global Execution Context and refer/allocate this to "this".Javascript is single threaded
// Global Execution Context
// Function Execution Context
// Eval Execution Context

//Javascript code run in two phase:memory creation phase,Execution phase
//In memory creation phase undefined value assign to every let element and defib=nation for method then in execution phase tehy got their value and when we get function to xecuted tehn it will create new sandbox and the whole thing repeat for the same and that sanbox delete after execution and for new function new sandbox will be created


//Control flow
// === -> it checks value along with datatype whether == not;
//We can execute multiple lines after if without using curl bracket instead of it we use ,

let x=1;
if(x==1) console.log("first"),console.log("second");


//Falsy values:false,0,-0,BigInt 0n,"", null,undefined,NaN
//True values:"0",'false'," ",[],{},functon(){},false==0,0=='',false==''

//To check object is empty or not
let empobj={};
if(Object.keys(empobj).length===0){//it return arrays by which we can get length easily
    console.log("yes");
}
else{
    console.log("NO");
}


//Nullish Coalescing Operator(??):null undefined  ->handle null/undefined values
let val1;
console.log(val1);
val1=undefined??88;//if value is undefined then we 88 value is assigned
// val1=null??undefined??20;//in this case always second execute
console.log(val1);