const MenuController = require('../controllers/menuController')
const express = require('express')
const router = express.Router()

router.get('/', MenuController.readMenu)
router.get('/add', MenuController.formMenu)
router.post('/add', MenuController.addMenu)
router.get('/:id/edit', MenuController.formEditMenu)
router.post('/:id/edit', MenuController.editMenu)
router.get('/:id/delete', MenuController.deleteMenu)
router.get('/:id/addTag',MenuController.addMenuTag)
router.post('/:id/addTag', MenuController.addTagMenu)

module.exports = router