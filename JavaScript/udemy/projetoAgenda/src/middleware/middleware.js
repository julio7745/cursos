//ANTES
exports.messages = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.sucess = req.flash('sucess')
    res.locals.user = req.session.user
    next()
}

//ANTES
exports.checklogin = (req, res, next) => {
    const rota = req.path.slice(0, 6)
    const rotasPermitidas = [ '/login', '/asset', '/favic' ]
    if( !rotasPermitidas.includes(rota)){
        if( !req.session.user ) {
            req.flash('errors', 'Você precisa estar logado')
            req.session.save(() => res.redirect('/login'));
            return
        }
    }
    next()
}

//DEPOIS
exports.check404Error = (req, res, next) => res.render('pages/404.ejs')
