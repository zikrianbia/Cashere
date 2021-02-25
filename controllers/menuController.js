const {Menu, Tag, MenuTag} = require('../models')

class MenuController{
    static readMenu(req, res){
        Menu.findAll()
            .then((menu) => {
                res.render("menuList", {menu})
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static formMenu(req, res){
        Menu.findAll()
        .then(() => {
            res.render('formMenu')
        })
        .catch((err) => {
            res.send(err)
        })
    }
    static addMenu(req, res){
        let dataMenu = {
            name: req.body.name,
            price: +req.body.price,
            imgUrl: req.body.Image
        }
        Menu.create(dataMenu)
            .then(() => {
                res.redirect('/menus')
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static formEditMenu(req, res){
        Menu.findOne({where:{
            id: req.params.id
        }})
            .then((menu)=>{
                res.render('editMenu', {menu})
            })
            .catch((err)=>{
                res.send(err)
            })
    }
    static editMenu(req, res){
        let dataMenu = {
            name: req.body.name,
            price: +req.body.price,
            imgUrl: req.body.Image
        }
        Menu.update(dataMenu, {where:{id:req.params.id}})
            .then(() => {
                res.redirect('/menus')
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static deleteMenu(req, res){
        Menu.destroy({where:{
            id: req.params.id
        }})
            .then(()=>{
                res.redirect('/menus')
            })
            .catch((err)=>{
                res.send(err)
            })
    }
    static addMenuTag(req, res){
        let dataMenu
        Menu.findOne({where: {id: req.params.id}})
            .then((menu)=>{
                dataMenu = menu
                return Tag.findAll()
            })
            .then((tags)=>{
                res.render('addTagMenu', {dataMenu, tags})
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static addTagMenu(req, res){
        let data = {
            TagId: +req.body.tag,
            MenuId: req.params.id
        }
        MenuTag.create(data)
            .then(()=>{
                res.redirect('/menus')
            })
            .catch((err)=>{
                res.send(err)
            })
    }
}

module.exports = MenuController