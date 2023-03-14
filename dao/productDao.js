const sql = require('./db')

const createProduct = (newProduct, done) => {
  const query = `INSERT INTO product(name, description, price) VALUES('${newProduct.name}', '${newProduct.description}', '${newProduct.price}')`
  sql.query(query, (err, res) => {
    if (err) {
      console.log(err)
      done(err)
    }
    console.log('Product created: ', newProduct.name)
    done(null, newProduct)
  })
}

const findProductById = (id, done) => {
  const query = `SELECT * FROM product WHERE id=${id}`
  sql.query(query, (err, res) => {
    if (err) {
      console.log(err)
      done(err)
    }
    console.log(res)
    done(null, res)
  })
}

const getAllProducts = (name, done) => {
  let query = 'SELECT * FROM product'
  if (name) {
    query += ` WHERE LOWER(name) LIKE '%${name}%'`
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log(err)
      done(err)
    }
    done(null, res)
  })
}
const updateProductById = (id, newData, done) => {
  const { name, description, price } = newData
  console.log(name, description, price)
  // Implementar funcionalidade para inserir apenas um campo
  // const name = newData.name ? `name = ${name}`: ''
  // const description = newData.description ? `description = ${description}`: ''
  // const price = newData.price ? `price = ${price}`: ''
  // const datatochange = `${name}`
  //   const query = `UPDATE product SET name = '${name}', description = '${description}', price = ${price} WHERE id = ${id};`
  const query = `UPDATE product SET name = '${name}', description = '${description}', price = ${price} WHERE id = ${id};`
  sql.query(query, (err, res) => {
    if (err) {
      console.log(err)
      done(err)
    }
    done(null, res)
  })
}
module.exports = {
  createProduct,
  findProductById,
  getAllProducts,
  updateProductById,
}
