const sql = require('./db')

createProduct = (newProduct, done) => {
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

findProductById = (id, done) => {
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

getAllProducts = (name, done) => {
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

module.exports = { createProduct, findProductById, getAllProducts }
