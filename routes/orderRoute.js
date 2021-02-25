const OrderController = require('../controllers/orderController')
const express = require('express')
const router = express.Router()

router.get('/', OrderController.readOrder)
router.get('/add', OrderController.formOrder)
router.post('/add', OrderController.addOrder)

module.exports = router