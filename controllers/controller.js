class Controller{
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