const productDao = require('../dao/productDao')

const createProduct = (req, res) => {
  const newProduct = req.body
  productDao.createProduct(newProduct, (err, result) => {
    console.log(result)
    res.json({ msg: 'produto adicionado ao banco de dados', produto: req.body })
  })
}

const getAllProducts = (req, res) => {
  //   res.send('all products')
  productDao.getAllProducts((err, result) => {
    res.json(result)
  })
}

const findProductById = (req, res) => {
  const id = parseInt(req.params.id)
  productDao.findProductById(id, (err, result) => {
    res.json(result[0])
  })
}

module.exports = { createProduct, findProductById, getAllProducts }
// function getAllProducts(req, res) {
//   res.send('get all products')
// }
