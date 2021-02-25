const{Order, Menu} = require('../models')
class OrderController{
    static readOrder(req, res){
        Order.findAll({
            include: Menu
        })
            .then((orders) => {
                res.render('orderList', {orders})
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static formOrder(req, res){
        Menu.findAll()
            .then((menus) => {
                res.render('formOrder', {menus})
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static addOrder(req, res){
        let dataMenu = {
            MenuId: req.body.menu,
            quantity: req.body.quantity
        }
        Order.create(dataMenu)
        .then(()=>{
            res.redirect('/orders')
        })
        .catch((err) => {
            res.send(err)
        })
    }

}

module.exports = OrderController