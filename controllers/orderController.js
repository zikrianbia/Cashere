const{Order, Menu} = require('../models')
class OrderController{
    static readOrder(req, res){
        let data = req.session.user
        Order.findAll({
            include: Menu,
            where: {
                KasirId: +req.session.user.id
            }
        })
            .then((orders) => {
                res.render('orderList', {orders, data})
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
            quantity: req.body.quantity,
            KasirId: +req.session.user.id
        }
        Order.create(dataMenu)
        .then(()=>{
            res.redirect('/orders')
        })
        .catch((err) => {
            res.send(err)
        })
    }
    static deleteAllOrders(req, res){
        Order.destroy({where:{KasirId: req.params.id}})
            .then(()=>{
                res.redirect('/orders')
            })
            .catch((err)=>{
                res.send(err)
            })
    }
}

module.exports = OrderController