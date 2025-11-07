// nodejs modueles
// there are many built in modules present in nodejs use it through documentation

//  os module
// import os module first
const os = require('os');

// os modules also has many function use it also through documentation
// provides memory remaining in device
console.log(os.freemem());
// to get home directory
console.log(os.homedir());
// os module has many such functions use it
// all are  about operating system

// path module
// import path module
const path = require('path');
// use to play with paths in system and applications 
// provides basename and directory name
const a1 = path.basename('c:\Users\PTATHAMESH\Desktop\SOFTWARE DEVELOPMENT\BACKEND\node3.js');
console.log(a1);
const a2 = path.dirname('c:\Users\PTATHAMESH\Desktop\SOFTWARE DEVELOPMENT\BACKEND\node3.js');
console.log(a2);
// such many function are present in path module use it through documentation



// fs i.e File System module
const fs = require('fs');
// to read file
fs.readFile('node3.txt', 'utf8', (err, data) => {
    console.log(err, data)
})
// to read file by blocking it for another task
const a = fs.readFileSync('node3.txt')
console.log(a.toString());

fs.writeFile('node3.txt', " Thuwdefef", ()=>{
    console.log("written in file");
})

const b = fs.writeFileSync('node3.txt', " Thuwdefef");
console.log(b)
//experience all function from documentation


// url module
// module use to play with urls it provides many methode on url
import url from 'url';
// use all funtions for better experinece