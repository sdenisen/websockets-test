import WebSocket  from 'ws';

const wss = new WebSocket.Server({port: 8080})

wss.on('connection', (ws) => {
    console.log("new connection");

    ws.send("welcome to WebSocket Server!");

    ws.on('message', (message) => {
        console.log(`received new message from client: ${message}`);
        ws.send(`message received: ${message}`);
    })


    ws.on('close', () => {
        console.log("connection closed");
    })
});

console.log("WebSocker is running on PORT: 8080");

