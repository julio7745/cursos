//exporta resposta para requerimento /
exports.index = (req, res) => {
    if( !req.session.user ) return res.redirect('/login')
    res.render('pages/index.ejs');
}
