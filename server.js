const http = require('http');
const fs = require('fs');


fs.readFile(__dirname + '/index.html', function(err,html){
 
if(err){
    throw err;
}

const server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(html);
});

server.listen(8081, '127.0.0.1');
console.log('Servidor rodando');
});