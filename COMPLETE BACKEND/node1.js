// node js is a backend runtime enviorment usedin backend server
// operates on asynchronous non blocking I/O model

console.log("@Hello World")

// in node js we can handle many connections using single thread using non blocking I/O model
// npm : node package manager ; it manages all packages in node js ; help to download many packages
// packages are code already present in js  which we can use
// use  "npm init" command to use package.json; it contains all information about project
// use "npm install express --save" command to add express.js  in node project
// node modules folder created automatically by this command which contains all dependencies about project
// node project contains many files and folders for project
// " npm i -g nodemon" command used to download nodemon package which is a global package
// use command "nodemon filename" it always create output helps in server

// dev dependency
// "npm install --save-dev nodemon" this command is used to create dependency that are we going to use for only these project
// after running command dependeny get added in package.json file as a dev dependency

// to uninstall any package fron node package  then use command (example) "npm uninstall nodemon"  "npm uninstall expresss" etc.

// package.json  : contains  dependencies downloaded by user , smaller file , show only usefull data packages
// package-lock.json : contains all dependency tree, larger file , show all data  of packages

// module wrapper function
function(exports, require, module, __filename, __dirname){}
//nodejs automatically wraaps node modules in above function
