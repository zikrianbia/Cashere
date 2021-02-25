class Controller{
    static home(req, res){
        res.render('home')
    }
    static failed(req, res){
        res.render('failed')
    }
    static logout(req, res){
        req.session.destroy(err =>{
            if(err){
                res.redirect('/failed')
            }else{
                res.redirect('/')
            }
        })
    }
}

module.exports = Controller