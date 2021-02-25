const auth = (req, res, next)=>{
    if(req.session.user){
        next()
    }else{
        res.redirect('/failed')
    }
}

module.exports = auth