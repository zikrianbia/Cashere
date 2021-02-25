const OrderController = require('../controllers/orderController')
const express = require('express')
const router = express.Router()

router.get('/', OrderController.readOrder)
router.get('/add', OrderController.formOrder)
router.post('/add', OrderController.addOrder)
router.get('/:id/delete', OrderController.deleteAllOrders)

module.exports = router