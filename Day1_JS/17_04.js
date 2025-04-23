//Promise=>It is a object represents the eventual completion or failure of an asynchronous op. an dits resulting value.
//We had Bluebird and Q libraries in history intead of promises
//Promise takes callback as function and reduce callback hell
const promise1=new Promise(function(resolve,reject){//it can be made without storing in any variable
    //Here we can do async task like db calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
}); 

// consumption of promise
promise1.then(function(){
    console.log("Promise consumed");
})





//pass data as arguments
const promise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Raghav", email:"Vrma@gmail.com"});
    },3000);
});
promise2.then(function(user){
    console.log(user);
})



//reject and chainig of data
const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Raghav", email:"Vrma@gmail.com"});
        }
        else{
            reject('Error is coming');
        }
    },3000);
});
promise3.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Everything is completed with promise is either is rejected or resolved")
})



//We can also handle promise using async awit instead of .then.As this cannot handle catch block error handling proprly so we have to use try catch block in it
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"JS", email:"Vrma@gmail.com"});
        }
        else{
            reject('JS went wrong');
        }
    },3000);
})

async function consumepromise5(){
    try{const response=await promise4;
    console.log(response);}
    catch(error){
        console.log(error);
    }
}

consumepromise5();

//fetch is object give promise in response
async function getalluser(){
    try{
        const response=await fetch('https://fake-json-api.mock.beeceptor.com/companies');
        console.log(response);
        const data=await response.json();//this also takes time so make it await
        console.log(data);
    }
    catch(error){
        console.log("E: ",error);
    }
}