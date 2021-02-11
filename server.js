import express from 'express'

const server = express()
const serverPort = 4500

server.listen(serverPort, () => {
    console.log(`Server running at port ${serverPort}.`);
})