// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express();
const mongoose = require('mongoose')

// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true, 
//   useUnifiedTopology: true
// })
// Controllers & Routes

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

  
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)

