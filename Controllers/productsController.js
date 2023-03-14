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
  const name = req.query.name
  productDao.getAllProducts(name ? name.toLowerCase() : null, (err, result) => {
    res.json(result)
  })
}

const findProductById = (req, res) => {
  const id = parseInt(req.params.id)
  productDao.findProductById(id, (err, result) => {
    res.json(result[0])
  })
}

const deleteProductById = (req, res) => {
  const id = parseInt(req.params.id)
  productDao.deleteProductById(id, (err, result) => {
    if (err) {
      res.json('ocorreu um erro.')
    }
    res.json(result)
  })
}

const updateProductById = (req, res) => {
  const id = parseInt(req.params.id)
  const newData = req.body
  productDao.updateProductById(id, newData, (err, result) => {
    res.json(result)
  })
}

module.exports = {
  createProduct,
  findProductById,
  getAllProducts,
  updateProductById,
  deleteProductById,
}
// function getAllProducts(req, res) {
//   res.send('get all products')
// }
