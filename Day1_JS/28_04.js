//call functions helps to use other object code in current object
function SetUsername(username){
    this.username=username;
    console.log("called");
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    // this.username=username;
    this.email=email;
    this.password=password
}
const a=new createUser("ragha","dvysufwe@","123")
console.log(a);

//static function->can access by using class but not access using object
//it is used when we have to provide some power to some object only  
class user{
static createID(){
    return `123`;
}
}
const h=new user("Ragha");
// console.log(h.createID());
console.log(user.createID());