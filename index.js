import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoute from './routes/auth.js'
import dotenv from 'dotenv'

dotenv.config()

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cardrpg.zyyalre.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,)
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('ERROR!:', err))

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/auth/', authRoute)

app.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server OK')
})