//importa validador de usuario
const Login = require('../models/UserDates.js')

//exporta resposta para requerimento login/
exports.index = (req, res) => {
    //renderiza pagina de login
    if( req.session.user ) return res.redirect('/home')
    res.render('pages/login.ejs');
}

//exporta resposta para requerimento login/register
exports.register = async (req, res) => {
    try{
        //cria novo objeto com a classe importada, enviamos o requerimento
        const usuario = new Login(req.body)
        //tenta registrar novo usuario
        await usuario.register()
        if(usuario.errors.length > 0) {
            req.flash('errors', usuario.errors)
            await req.session.save();
            await req.session.save(function () {
                return res.redirect('/login'); 
            });
        }else{
            req.flash('sucess', 'Usuario cadastrado com sucesso')
            await req.session.save(function () {
                return res.redirect('/login'); 
            });
        }
    }catch (e) {
        console.log(e);
        res.render('pages/404.ejs')
    }
}

//exporta resposta para requerimento login/login
exports.login = async (req, res) => {
    try{

        //cria novo objeto com a classe importada, enviamos o requerimento
        const usuario = new Login(req.body)
        //tenta registrar novo usuario

        await usuario.login()

        if(usuario.errors.length > 0) {
            req.flash('errors', usuario.errors)
            await req.session.save(function () {
                return res.redirect('/login'); 
            });
        }else{
            req.flash('sucess', 'Usuario logado com sucesso')
            req.session.user = usuario.user;
            await req.session.save(function () {
                return res.redirect('/home'); 
            });
        }
    }catch (e) {
        console.log(e);
        res.render('pages/404.ejs')
    }
}

//responsavel por matar a sessão.login
exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login')
}