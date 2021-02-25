const {Tag, Menu, MenuTag} = require('../models')

class TagController{
    static readTag(req, res){
        Tag.findAll()
            .then((tags) => {
                res.render('tagList', {tags})
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static formTag(req, res){
        Tag.findAll()
            .then(() => {
                res.render('formTag')
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static addTag(req, res){
        let dataTag = {
            name: req.body.name,
        }
        Tag.create(dataTag)
            .then(() => {
                res.redirect('/tags')
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static tagMenu(req, res){
        Tag.findOne({
            where: {id: +req.params.id},
            include: Menu
        })
            .then((data)=>{
                res.render('tagMenu', {data})
            })
            .catch((err)=>{
                res.send(err)
            })
    }
}

module.exports = TagController