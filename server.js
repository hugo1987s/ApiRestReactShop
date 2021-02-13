import express from 'express'
import bodyParser from 'body-parser'
import ProductController from './controllers/ProductController'

const server = express()
const serverPort = process.env.PORT || 4500

server.use(bodyParser.urlencoded({ extended: false}))
server.use(bodyParser.json())

server.get('/api/products', ProductController.GetProducts)

server.get('/api/products/:productId', (req, res) => {

})

server.post('/api/product', (req, res) => {
    console.log(req.body);
    res.status(200).send({'message' : 'POST received'})
})

server.put('/api/products/:productId', (req, res) => {

})

server.delete('/api/products/:productId', (req, res) => {

})


server.listen(serverPort, () => {
    console.log(`Server running at port ${serverPort}`)
})