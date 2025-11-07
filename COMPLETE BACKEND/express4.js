const express = require('express');
const path = require('path')
const  app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'express3')));

// to access home or differnt pages with diffrent names for exaple in linkedin website url diffrent url comes with diffrent names
app.get('/home/:name', (req, res) =>{
    res.send('hello world' + req.params.name)
});
app.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname, 'express2.html'))
})
app.listen(port, () =>{
    console.log(`example app listenng at https://localhost:${port}`)
})