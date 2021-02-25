const express = require('express')
const router = express.Router()
const menuRoute = require('./menuRoute')

const orderRoute = require('./orderRoute')
const kasirRoute = require('./kasirRoute')

const auth = require('../middlewares/auth')
const Controller = require('../controllers/controller')

router.use('/kasirs', kasirRoute)

router.use(auth)

router.use('/menus', menuRoute)

router.use('/orders', orderRoute)

router.use('/logout', Controller.logout)

module.exports = router