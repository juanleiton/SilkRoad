import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
mongoose.set('strictQuery', true)

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
const validEV = typeof DB_USER === 'string' && typeof DB_PASSWORD === 'string' && typeof DB_HOST === 'string' && typeof DB_NAME === 'string'
// const validEnv = [DB_USER, DB_PASSWORD, DB_HOST, DB_NAME]
//   .map(env => typeof env)
//   .every(type => type === 'string')
const connection = validEV ? `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}` : 'invalid connection'

mongoose.connect(connection)
  .then(() => {
    console.log('SilkRoad is connected to ', DB_NAME)
  })
  .catch(error => {
    console.error('Failed connection', error.message)
  })
