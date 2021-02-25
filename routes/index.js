const express = require('express')
const router = express.Router()
const menuRoute = require('./menuRoute')
const tag = require('./tagRoute')

const orderRoute = require('./orderRoute')
const kasirRoute = require('./kasirRoute')

const auth = require('../middlewares/auth')
const Controller = require('../controllers/controller')

router.use('/kasirs', kasirRoute)
router.use('/', Controller.home)
router.use('/failed', Controller.failed)
router.use(auth)

router.use('/menus', menuRoute)
router.use('/tags', tag)
router.use('/orders', orderRoute)
router.use('/logout', Controller.logout)

module.exports = router