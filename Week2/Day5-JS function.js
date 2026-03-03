const { log } = require("node:console")


//Task 1: Function Declaration  
function userProfile(name)
{
    console.log(" “Hello,",name)
}
userProfile("Gayathri")

//Task 2: Arrow Function  
let double =(number) =>
{
 let result=number*2
 console.log("result")
}
double(12)

//Task 3: Anonymous Function  
setTimeout
(function(){
    console.log("This message is delayed by 2 seconds")
},2000)
