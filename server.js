var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
const cors = require('cors');

app.use(express.static(__dirname + '/public'))

app.use(cors())

io.on('connection', (client) => {
  client.on('chat', msg => {
    console.log(msg);
    io.emit('chat', msg)
  })
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

http.listen(3000, function() {
  console.log('listening on localhost:3000')
})
