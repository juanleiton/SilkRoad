import '../db-connection'
import Product from '../schemas/productSchema'
import { IProduct } from '../definitions/interfaces'

export async function getDefaultFeed (itemsPerPage: number, currentPage: number):
Promise<IProduct[]> {
  // currentPage MUST be an integer greater than 0, handle the error.
  const defaultFeed = await Product.find({})
    // .populate('User')
    // .populate('Category')
    // .populate('Subcategory')
    // .populate('Brand')
    // .populate('Review')
    // .populate('Question')
    .sort({ updatedAt: 'desc' })
    .skip(itemsPerPage * (currentPage - 1)) // An aux function can be defined and then imported for all routes
    .limit(itemsPerPage)
  return defaultFeed
}
