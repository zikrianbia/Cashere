const {Tag} = require('../models')

class TagController{
    static readTag(req, res){
        Tag.findAll()
            .then((Tag) => {
                res.send(Tag)
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static formTag(req, res){
        res.render('formTag')
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
}

module.exports = TagController