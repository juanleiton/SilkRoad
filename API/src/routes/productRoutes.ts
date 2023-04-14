import express from 'express'
import cors from 'cors'

const productRouter = express.Router()

productRouter.get('/product', cors(), (_req, res) => {
  res.send('All products')
})

export default productRouter
