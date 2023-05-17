//importa validador de usuario
const RegisterUser = require('../models/registerNewUserModel.js')

//exporta resposta para requerimento /index
exports.index = (req, res) => {
    //renderiza pagina de login
    res.render('pages/login.ejs');
}

//exporta resposta para requerimento /index
exports.register = async (req, res) => {
    try{
        //cria novo objeto com a classe importada, enviamos o requerimento
        const usuario = new RegisterUser(req.body)
        //tenta registrar novo usuario
        await usuario.register()
        if(usuario.errors.length > 0) {
            req.flash('errors', usuario.errors)
            await req.session.save();
            return res.redirect('/login');
        }else{
            req.flash('sucess', 'Usuario cadastrado com sucesso')
            return res.redirect('/login');
        }
    }catch (e) {
        console.log(e);
        res.render('pages/404.ejs')
    }
}
