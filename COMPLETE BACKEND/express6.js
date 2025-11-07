// expess handle bars
// there are diffrent files in project 
// to make them we need an templating engine
// express handle bars are one of templating engine
// by using we can play with dynamic data
// handle bars
// templating engine use to handle javascript 
// express handlebars
// npm package to handle templates
// npm install express-handlebars

//necessary to make views folder
// need to create hbs file

// to set the view engine

const handlebars = require(express.handlebars)
const express = require('express');
const path = require('path')
const  app = express();
const port = 3000;

app.set("view engine", "hbs")

app.get("", (req, res) =>{
    res.render('index', {
        don: "pagal aaahe"
    })
}) 
app.get('/', (req, res) =>{
    res.send('hello world')
});
app.get('/aout', (req, res) =>{
    res.sendFile(path.join(__dirname, 'express2.html'))
})
app.listen(port, () =>{
    console.log(`example app listenng at https://localhost:${port}`)
})
