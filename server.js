import express from 'express'
import bodyParser from 'body-parser'
import ProductRoutes from './routes/ProductRoutes'
import EmailRoutes from './routes/EmailRoutes'
import cors from 'cors'

const server = express()
const serverPort = process.env.PORT || 4500

server.use(cors())
server.use(bodyParser.urlencoded({ extended: false}))
server.use(bodyParser.json())

server.use('/api/products', ProductRoutes)
server.use('/api/sendmail', EmailRoutes)
/* server.get('/api/products', ProductController.GetProducts)
server.get('/api/products/:productId', ProductController.GetProductById)
server.post('/api/product', ProductController.AddProduct)
server.put('/api/products/:productId', ProductController.UpdateProduct)
server.delete('/api/products/:productId', ProductController.DeleteProduct)
 */

server.listen(serverPort, () => {
    console.log(`Server running at port ${serverPort}`)
})