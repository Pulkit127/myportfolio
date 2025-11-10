import express from 'express'
import connectDB from './config/db.js'
import Contact from './models/Contact.js'

// Connect to MongoDB
connectDB()

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Routes
app.get('/', (req, res) => {
  res.render('home')
})

app.post('/submit', async (req, res) => {
  try {
    const contact = new Contact(req.body)
    await contact.save()
    res.redirect('/thank-you')
  } catch (err) {
    res.status(500).send('Error saving message: ' + err)
  }
})

app.get('/thank-you', (req, res) => {
  res.render('thank-you')
})

// Server
app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000')
})
