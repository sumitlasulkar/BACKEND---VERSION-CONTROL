// http server using http module
const http = require('http')
// to specify on which port node website want to run
const port = process.env.PORT;
//here we want to use straigh line after  port but keybord problem is there
// const port = process.env.PORT  two straight line 3000;
const server = http.createServer((req, res) => {
    console.log(req.url) 
    res.statusCode = 200;
    // statuscode represents for websitre server condition like 404: server not found
    res.setHeader('Content-Type', 'test/html')
    res.end(<h1>This bablu the great</h1>);
})

server.listen( port, ()=>{
    console.log(`server is listening on port ${port}`)
});
