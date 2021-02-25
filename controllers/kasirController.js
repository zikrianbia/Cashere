const {Kasir} = require('../models')
const{ComparePassword, comparePassword} = require('../helper/bcrypt')

class KasirController{
    static login(req, res){
        res.render('login')
    }

    static getLogin(req, res){
        Kasir.findOne({
            where:{
                email: req.body.email
            }
        })
            .then((kasir) => {
                const correctPassword = comparePassword(req.body.password, kasir.password)
                if(kasir && correctPassword){
                    req.session.user = {
                        id: kasir.id,
                        name: kasir.name
                    }
                    res.redirect('/')
                }else{
                    res.send('salah password')
                }
            })
            .catch(()=>{
                res.send('maaf masih ada yg salah')
            })
    }

    static formRegister(req, res){
        res.render('formRegister')
    }

    static postRegister(req, res){
        let data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        Kasir.create(data)
            .then((kasirs) => {
                res.send(kasirs)
            })
            .catch((err)=>{
                res.send(err)
            })
    }
}

module.exports = KasirController