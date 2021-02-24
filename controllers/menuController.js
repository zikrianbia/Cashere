const {Menu} = require('../models')

class MenuController{
    static readMenu(req, res){
        Menu.findAll()
            .then((menu) => {
                res.send(menu)
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static formMenu(req, res){
        res.render('formMenu')
    }
    static addMenu(req, res){
        let dataMenu = {
            name: req.body.name,
            price: +req.body.price,
            imgUrl: req.body.imgUrl
        }
        Menu.create(dataMenu)
            .then(() => {
                res.redirect('/menus')
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = MenuController