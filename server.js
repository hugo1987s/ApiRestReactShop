import express from 'express'
import bodyParser from 'body-parser'

const server = express()
const serverPort = process.env.PORT || 4500

server.use(bodyParser.urlencoded({ extended: false}))
server.use(bodyParser.json())

server.listen(serverPort, () => {
    console.log(`Server running at port ${serverPort}`)
})