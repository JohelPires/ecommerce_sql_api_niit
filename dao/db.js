const mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'sample',
  user: 'root',
  password: process.env.PASSWORD,
})

connection.connect((error) => {
  if (error) throw error
  console.log('Conectado ao banco de dados.')
})

module.exports = connection

// connection.connect((err) => {
//   if (err) {
//     console.log('erro de conexão com o banco de dados.')
//   } else {
//     console.log('Conectado ao banco de dados')
//   }
//   const address = 'teste'
//   const sql = `INSERT INTO customers(name, address) VALUES('John', '${address}');`
//   connection.query(sql, (err, result) => {
//     if (err) {
//       throw err
//     }
//     console.log('Dado inserido.')
//   })
//   connection.query('SELECT * FROM customers', (err, result) => {
//     if (err) throw err
//     console.log(result)
//   })
// })
