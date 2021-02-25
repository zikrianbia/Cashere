const TagController = require('../controllers/tagController')
const express = require('express')
const router = express.Router()


router.get('/', TagController.readTag)
router.get('/add', TagController.formTag)
router.post('/add', TagController.addTag)

module.exports = router