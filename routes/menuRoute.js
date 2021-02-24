const MenuController = require('../controllers/menuController')
const express = require('express')
const router = express.Router()

router.get('/', MenuController.readMenu)
router.get('/add', MenuController.formMenu)
router.post('/add', MenuController.addMenu)

module.exports = router