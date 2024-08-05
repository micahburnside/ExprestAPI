const express = require('express')
const {request} = require("express");
const router = express.Router()


// Getting All
router.get('/', (req, res) => {
  res.send('Hello World')
})

// Getting One
router.get('/:id', (req, res) => {

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
