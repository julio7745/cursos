module.exports.antes = (req, res, next) => {
    console.log('middleware global de antes');
    next()
}

module.exports.depois = (req, res, next) => {
    console.log('middleware global de depois');
    next()
}