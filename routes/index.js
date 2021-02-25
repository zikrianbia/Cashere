const express = require('express')
const router = express.Router()
const menuRoute = require('./menuRoute')
const tag = require('./tagRoute')
const orderRoute = require('./orderRoute')
const kasirRoute = require('./kasirRoute')

const auth = require('../middlewares/auth')
const Controller = require('../controllers/controller')

router.use('/menus', auth, menuRoute)
router.use('/tags',auth, tag)
router.use('/orders',auth, orderRoute)
router.use('/kasirs', kasirRoute)

router.use('/', Controller.home)
router.use('/failed', Controller.failed)
router.use('/logout',auth, Controller.logout)

module.exports = router