//to upload or serve static folder into express using middleware function

// use.app  is amiddleware which can handle request and response
// request  is coming while response is going
// next is cause there are many middlewares so to use next one after one next is used
const express = require('express');
const path = require('path')
const  app = express();
const port = 3000;

//default middleware
app.use(express.static(path.join(__dirname, 'express3')));

// user created middleware, not use mostly
const userMiddleware = (req, res, next) =>{
    console.log(req)
    next()
}
app.use(userMiddleware)


app.get('/', (req, res) =>{
    res.send('hello world')
});
app.get('/aout', (req, res) =>{
    res.sendFile(path.join(__dirname, 'express2.html'))
})
app.listen(port, () =>{
    console.log(`example app listenng at https://localhost:${port}`)
})