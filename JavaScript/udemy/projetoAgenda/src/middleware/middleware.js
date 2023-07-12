//ANTES
exports.messages = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.sucess = req.flash('sucess')
    res.locals.user = req.session.user
    next()
}

//DEPOIS
exports.check404Error = (req, res, next) => res.render('pages/404.ejs')
