import { useState } from "react"

export default function Latency(){
    const [latency,setLatency] = useState('Loading Latency')
const W3CWebSocket = require('websocket').w3cwebsocket;

const client = new W3CWebSocket('ws://localhost:55455/');

client.onerror = function() {
    console.log('Connection Error');
};

client.onopen = function() {
    console.log('WebSocket Client Connected');

    function sendNumber() {
        if (client.readyState === client.OPEN) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            client.send(number.toString());
            setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
};

client.onclose = function() {
    console.log('Client Closed');
};

client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        setLatency(Date.now()-e.data)
    }
}
    return (
        <div>{latency} ms</div>
    )
}
