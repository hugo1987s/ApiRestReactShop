import express from 'express';
import ProductController from '../controllers/ProductController'

const ProductRoutes = express.Router();

ProductRoutes.get('/', ProductController.GetProducts)
ProductRoutes.get('/:productId', ProductController.GetProductById)
ProductRoutes.post('/', ProductController.AddProduct)
ProductRoutes.put('/:productId', ProductController.UpdateProduct)
ProductRoutes.delete('/:productId', ProductController.DeleteProduct)
  
export default ProductRoutes
