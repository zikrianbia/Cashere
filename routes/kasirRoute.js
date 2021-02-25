const KasirController = require('../controllers/kasirController')
const express = require('express')
const router = express.Router()

router.get('/', KasirController.login)
router.post('/', KasirController.getLogin)
router.get('/register', KasirController.formRegister)
router.post('/register', KasirController.postRegister)

module.exports = router