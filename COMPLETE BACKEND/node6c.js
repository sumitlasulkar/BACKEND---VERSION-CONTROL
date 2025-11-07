// http server using http module
const http = require('http')
const fs = require('fs');
// to specify on which port node website want to run
const port = process.env.PORT;
//here we want to use straigh line after  port but keybord problem is there
// const port = process.env.PORT  two straight line 3000;
const server = http.createServer((req, res) => {
    
    // statuscode represents for websitre server condition like 404: server not found
    //code represents server on diffrent port for diffrent pages
    // to add index page or any page on node server
    res.setHeader('Content-Type', 'test/html')
    console.log(req.url) 

    if(req.url == '/'){
        res.statusCode = 200;
        res.end(<h1>This bablu the great</h1>);
    } else if (req.url == '/about'){
        res.statusCode = 200;
        const data = fs.readFileSync('node6c.html')
        res.end(data.toString());
    } else{
        res.statusCode = 404;
        res.end(<h1>no page</h1>);
    }
   
})