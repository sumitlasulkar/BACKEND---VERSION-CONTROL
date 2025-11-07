// Express js it is a server side framework
// we can write an code with our opinion 
// use "npm install express --save" command to add express.js  in node project
// no need if if else statments in express js like node js

const express = require('express');
const  app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('hello world')
});
app.get('/aout', (req, res) =>{
    res.send('hello about')
})
app.listen(port, () =>{
    console.log(`example app listenng at https://localhost:${port}`)
})
