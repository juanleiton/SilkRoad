import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import productRouter from './routes/productRoutes'

const app = express()

// env variables
dotenv.config()
const { LOCAL_SERVER_PORT } = process.env

// settings
app.set('port', process.env.PORT ?? LOCAL_SERVER_PORT)

// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// routes
app.use('/', productRouter)

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})
