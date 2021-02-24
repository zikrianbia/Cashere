const express = require('express')
const router = express.Router()
const menuRoute = require('./menuRoute')

router.get('/', (req, res) => {
    res.send('halloooooo')
})

router.use('/menus', menuRoute)

module.exports = router