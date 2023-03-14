require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./Routes/productRoutes')
app.use(express.json())

function welcome(req, res) {
  res.json({ msg: 'Welcome to node express mysql integration application.' })
}

app.use('/products', router)

app.get('/', welcome)

const PORT = process.env.PORT || 2999
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`)
})
