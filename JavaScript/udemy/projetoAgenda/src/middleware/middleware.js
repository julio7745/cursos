//ANTES
exports.messages = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.sucess = req.flash('sucess')
    next()
}
//DEPOIS
exports.check404Error = (req, res, next) => res.render('pages/404.ejs')
