import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 4300

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose
  .connect('mongodb://localhost:27017/urlshortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', routes)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))
