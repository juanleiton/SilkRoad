import { Date, Types } from 'mongoose'
import { Currency } from './enums'

export interface IProduct {
  user: Types.ObjectId
  name: string
  description: string
  category: Types.ObjectId
  subcategory: Types.ObjectId
  brand: Types.ObjectId
  main_image: string
  detail_images: string[]
  price: number
  currency: Currency
  barter_allowed: boolean
  stock: number
  reviews: Types.ObjectId[]
  questions: Types.ObjectId[]
  active: boolean
}

export interface IDetailProduct extends IProduct {
  id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
}
