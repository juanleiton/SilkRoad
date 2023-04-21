import express from 'express'
import cors from 'cors'
import { getDefaultFeed } from '../controllers/productControllers'

const productRouter = express.Router()

productRouter.get('/defaultFeed/:numItems/:page', cors(), (req, res) => {
  try {
    const { numItems, page } = req.params
    const itemsPerPage = Number(numItems)
    const currentPage = Number(page)
    getDefaultFeed(itemsPerPage, currentPage).then(result => {
      res.json(result)
    }).catch(() => {
      console.log('Not found')
    })
  } catch (error) {
    console.log(error)
  }
})

export default productRouter
