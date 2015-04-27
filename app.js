/*jslint node:true*/
'use strict';

// Read port as the first parameters of the command line.
var defaultPort = 8080,
    WebSocketServer = require('ws').Server,
    app = require('http').createServer(handler),
    //io = require('socket.io')(app),
    fs = require('fs'),
    argv = require('yargs')
        .usage('Usage: $0 -port [num]')
        .default('port', process.env.PORT || defaultPort, 'Port on which server would be listening')
        .argv,
    wss;

var History=[];
function writeHistory (message) {
    if (History.length<10) {
    History.push(message);
}
else {
    History.shift(message);
    History.push(message);
}}


function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
        
            res.writeHead(200);
            res.end(data);
        });
}

var port = argv.port;
wss = new WebSocketServer({ server: app });
wss.on('connection', function (ws) {
    console.log('Client connected');
  for(var i=0;i<History.length;i++) { 
         console.log("Send history", History[i]); 
         ws.send(History[i]); 
     } 

    ws.on('message', function (message) {
        console.log('< %s', message);
        writeHistory(message,10);
		
        wss.clients.forEach(function each(client) {
            // Send message back to the 
            // all connected clients
            console.log("> %s to client", message);
            client.send(message);
            
        });

    });
   
});




console.log('IRC server started on port ' + port + '.');
app.listen(port);




