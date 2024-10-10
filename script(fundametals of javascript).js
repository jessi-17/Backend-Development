var arr = [1,2,3,4,"hey",{},true,function(){},[]]
//put any kind of value in arr in js. 


var arr1 = [1,2,3,4];

//things to knwo about: foreach map filter map indexof


// for each member of the element in the arr
arr1.forEach(function(val){
    console.log(val + "hello"); //val:-1,2,3,4
})

//iss array ke comparision mai ek aur arr banani
//so bascially when we want to perform some calculation on an array and want to store that new result in a new array of same size then we use map.

var newarr = arr1.map(function(val){
    return val+20;
})
console.log(newarr);

//now if we want to filter out the array .like print the elements grater than 3 in the array.

var ans = arr1.filter(function(val){ //filter works on true or false
    if(val>=3){
        return true;
    }
    else return false;
})
console.log(ans);


//to find something in array that occur to have first in the array.
//such as if we have morethan two same elements in the array then after find we will get the first occuring element.
var find = arr.find(function(val){
    if(val === 12){
        return val;
    }
})
console.log(find)

// indexof used in finfding an element at a certain indexedDB.if not found the answer would be -1 .
console.log(arr.indexOf(2));


// OBJECTS :-key value pair;
var obj={
    name:"kunwar",
    age:22,
    anything:"anything",
    key:"value",
}
var obj2 ={
    name:"jessi",
    age:19,
}
//to aceess: 
console.log(obj['name']+obj2['name']);

console.log(obj.name+obj2['name']);
obj2.age = 20
console.log(obj2.age);
// Object.freeze(obj);
obj.age=15;
console.log(obj.age);

//length of the function;
function abcd(a,b,c,d){

};
console.log(abcd.length) //no.of paramerter == length of function  . function in js is itself an object
console.dir(abcd);
function function2(){
    return 12;
}
console.log(function2()); 