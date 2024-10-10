setTimeout(function(){},2000)

// example:- where the both will print at the same time
console.log("hello")
setTimeout(function(){},2000);
console.log("world!");

//but if we want the after code to  run after 2 sec then we can do is:";
console.log("hello")
setTimeout(function(){
    console.log("world!");
},2000);



