const productController = require('../Controllers/productsController')

const router = require('express').Router()

router
  .route('/')
  .post(productController.createProduct)
  .get(productController.getAllProducts)

router.route('/:id').get(productController.findProductById)

module.exports = router
