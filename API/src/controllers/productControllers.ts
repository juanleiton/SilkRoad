import '../db-connection'
import Product from '../schemas/productSchema'
import { IProduct } from '../definitions/interfaces'

export async function getDefaultFeed (itemsPerPage: number, currentPage: number):
Promise<IProduct[] | []> {
  const defaultFeed = (await Product.find({})
    .sort({ updatedAt: 'desc' }))
    .slice(itemsPerPage * (currentPage - 1)) // An aux function can be defined and then imported for all routes
    .slice(0, itemsPerPage - 1)
  return defaultFeed
}
