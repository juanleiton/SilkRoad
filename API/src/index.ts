import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const { SERVER_PORT } = process.env
const Port = SERVER_PORT !== undefined ? SERVER_PORT : 3001

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.listen(Port, () => {
  console.log(`Listening at http://localhost:${Port}`)
})
