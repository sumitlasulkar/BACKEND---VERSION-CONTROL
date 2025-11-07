// to add html page  in node server
// use express and bootstrap togethr for best website


const express = require('express');
const path = require('path')
const  app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('hello world')
});
app.get('/aout', (req, res) =>{
    res.sendFile(path.join(__dirname, 'express2.html'))
})
app.listen(port, () =>{
    console.log(`example app listenng at https://localhost:${port}`)
})
