const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribeToChannel: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    require: true
  }
})
