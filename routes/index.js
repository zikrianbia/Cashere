const express = require('express')
const router = express.Router()
const menuRoute = require('./menuRoute')

const orderRoute = require('./orderRoute')

router.get('/', (req, res) => {
    res.send('halloooooo')
})

router.use('/menus', menuRoute)

router.use('/orders', orderRoute)

module.exports = router