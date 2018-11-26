const net = require('net');

const server = net.createServer(socker => {
    socker.on('data', data => {
        socker.on('data', data => {
            socker.write(data)
        })
    })
})

server.listen(8888)