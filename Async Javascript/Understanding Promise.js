//understanding  Promise

// only three states:- pending, resolve, reject
//if resolve then use "then" else if reject then use "catch"
//example:-
let ans = new Promise((res,rej)=>{
    if(false){
        return res();
    }else{
        return rej();
    }
})

ans.then(function(){
    console.log("it is resolved!")

}).catch(function(){
    console.log("it is rejected!")
})
// console.log(ans);


//another example the user have asked no from 0-9 and if the input from user is below 5 then resolve otherwise reject.

var ans1 = new Promise((res,rej)=>{
    var n = Math.floor(Math.random()*10);  //this math function  will give output no form 0-9. 
    console.log(n);
    if(n<5){
        return res();
    }else{
        return rej();
    }

})
ans1.then(function(){
    console.log("is is less than 5")
}).catch(function(){
    console.log("is is not less than 5")
})


console.log(ans1);