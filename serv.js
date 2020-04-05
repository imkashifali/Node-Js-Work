// Create Server Using Http Function in Node js.......
const http =require('http');
const server =http.createServer(function(Request,Response){

    Response.writeHead(200,{'content-type':'text/html'});

    Response.write('<h1>Node server start now</h1>');
    Response.end();

}).listen(4000,()=>console.log("Server start now port on 3000"));


