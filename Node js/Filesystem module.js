import * as fs from 'node:fs';  //const fs = require(fs)



//things that we need to know:- 
    //1. writefile
    //3.appendfile
    //4.copyfile
    //5.rename
    //.unlink

// const fs = require('fs');

fs.writeFile("Hi.txt","my name is jaspreet",function(err){
    if(err) console.log(err)
        else console.log("done")
})

fs.appendFile("Hi.txt","my boyfirend is Kunwar",function(err){
    if(err) console.log(err)
        else console.log("done")
})

fs.copyFile("Hi.txt","copy.txt",function(err){
    if(err) console.log(err)
        else console.log("done")
})
fs.rename("Hi.txt","copy1.txt",function(err){
    if(err) console.log(err)
        else console.log("done")
})
fs.unlink("copy1.txt",function(err){
    if(err) console.log(err)
        else console.log("removed")
})