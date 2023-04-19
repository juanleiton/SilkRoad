import { Schema, model } from 'mongoose'
import { IProduct } from '../definitions/interfaces'
// import User from './userSchema'
// import Category from './categorySchema'
// import Subcategory from './subcategorySchema'
// import Brand from './brandSchema'
// import Review from './reviewSchema'
// import Question from './questionSchema'

const productSchema = new Schema<IProduct>(
  {
    user: {
      // This field will be hardcoded until the User schema is defined...
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true,
      minLength: 20,
      maxLength: 30
    },
    description: {
      type: String,
      required: true,
      minLength: 200,
      maxLength: 600
    },
    category: {
      // This field will be hardcoded until the Category schema is defined...
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    subcategory: {
      // This field will be hardcoded until the Subcategory schema is defined...
      type: Schema.Types.ObjectId,
      ref: 'Subcategory',
      required: true
    },
    brand: {
      // This field will be hardcoded until the Brand schema is defined...
      type: Schema.Types.ObjectId,
      ref: 'Brand'
      // default: SOME DEFAULT OBJECTID
    },
    main_image: {
      type: String,
      required: true,
      minLength: 60, // Whatever min Cloudinary sets
      maxLength: 180 // Whatever max Cloudinary sets
    },
    detail_images: {
      type: [String], // [] by default
      validate: [checkImagesValidity, 'Each item can have up to 9 images.']
    },
    price: {
      type: Number,
      required: true,
      validate: [checkPriceValidity, 'Price can have up to 2 decimal places.']
    },
    currency: {
      type: String,
      enum: ['USD', 'CAD', 'AUD', 'NZD', 'EUR'], // Many more currencies and cryptocurrencies will be allowed
      required: true
    },
    barter_allowed: {
      type: Boolean,
      default: true
    },
    stock: {
      type: Number,
      required: true,
      validate: [checkStockValidity, 'Stock must be an integer.']
    },
    reviews: {
      type: [Schema.Types.ObjectId],
      ref: 'Review'
    },
    questions: {
      type: [Schema.Types.ObjectId],
      ref: 'Question'
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
)

const Product = model<IProduct>('Product', productSchema)

function checkImagesValidity (urls: String[]): Boolean {
  const urlValidLength = urls.every(url => url.length >= 60 && url.length <= 180)
  const arrayValidLength = urls.length <= 9
  return urlValidLength && arrayValidLength
}
function checkPriceValidity (price: Number): Boolean {
  const priceString = price.toString()
  const upToTwoDecimalPlaces = !priceString.includes('.')
  const noDecimalPlaces = priceString.slice(-3).includes('.')
  return upToTwoDecimalPlaces || noDecimalPlaces
}
function checkStockValidity (stock: Number): Boolean {
  const stockString = stock.toString()
  const noDecimalPlaces = !stockString.includes('.')
  return noDecimalPlaces
}

export default Product
