exports.global = (req, res, next) =>{
    res.locals.titulo = 'Esse dado vai pra todo requerimento, ja que esta no middleware'
    next();
}