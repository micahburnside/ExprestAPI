const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/subscribers', {useNewUrlParser: true})

app.listen(3000, () => console.log('Server Started'))
