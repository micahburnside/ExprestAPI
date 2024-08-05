const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Getting All
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', async (req, res) => {
  const subscriber = new Subscriber ({

  })
})

// Creating One
router.post('/', (req, res) => {

})

// Updating One
router.patch('/:id', (req, res) => {

})

// Deleting One
router.delete('/:id', (req, res) => {

})

module.exports = router
