const express = require('express')
const router = express.Router()
const menuRoute = require('./menuRoute')
const tag = require('./tagRoute')

router.get('/', (req, res) => {
    res.send('halloooooo')
})

router.use('/menus', menuRoute)
router.use('/tags', tag)


module.exports = router