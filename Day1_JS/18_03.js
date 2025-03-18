//Map stores key-value pairs,and inset in same order unlike objects where inserton order not matter.and we can add unique values to it

const map=new Map();
map.set('IN',"India");
map.set('IN',"OOP");
map.set('Fr',"France");
map.set('OP',"OOP");
console.log(map);

for(const key of map){
    console.log(key);//it will retunr different array of key,value pair
}

for(const [key,value] of map){//so we destructure array in key,value pair to get proper output
    console.log(key,"",value)//it will retunr different array of key,value pair
}

//for of loop not work on objects so we use for in loop which work in oject as well as in array return key and we got values by arr[key]. 

 //For each loop
 const co=["js","ruby","java"];
 co.forEach(function (item){
    item+="kk";
    // console.log(item);
 })
 co.forEach( (item)=>{
    console.log(item);
 })
 console.log(co);

 function printMe(item){
    console.log(item);
 }
 co.forEach(printMe);

 co.forEach(function (item,index,arr){
   item+="kk";
   console.log(item,index,arr);
})


//Objects in arrays iterate
const myss=[
   {la:"java",
      mg:"js"
   },
   {la:"cpp",
      mg:"c++"
   }
]
myss.forEach((itm)=>{
   console.log(itm["la"]);
})


//For each loop do not retunr anything and if we try to return it print undefined and foreach,filter take callback functions in it

const mynu=[1,2,3,4,5,6];
const newnu=mynu.filter((num)=>num<4);
const   wnu=mynu.filter((num)=>{
   return num<3;//if we not use current keyword then it will print empty array
});
console.log(newnu);

 //chaining
const mu=[1,2,34,5,6,7];
const aa=mu.map((num)=>num*10).map((num)=>num+1).filter((num)=> num>30);
console.log(aa);


//reduce
const kk=[4,5,9];
const mytot=kk.reduce(function(accumulator,currentvalue){
   console.log(`accumulator:${accumulator} and current value is ${currentvalue}`);
   return accumulator*currentvalue;
},2);//here acumulator value is passed
console.log(mytot);