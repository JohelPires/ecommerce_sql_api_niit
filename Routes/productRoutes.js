const productController = require('../Controllers/productsController')

const router = require('express').Router()

router
  .route('/')
  .post(productController.createProduct)
  .get(productController.getAllProducts)

router
  .route('/:id')
  .get(productController.findProductById)
  .patch(productController.updateProductById)
  .delete(productController.deleteProductById)

module.exports = router
