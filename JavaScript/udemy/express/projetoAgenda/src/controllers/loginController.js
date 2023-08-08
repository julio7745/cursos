//importa validador de usuario
const Login = require('../models/userDates.js')

//exporta resposta para requerimento login/
exports.index = (req, res) => {
    
    //renderiza pagina de login
    if( req.session.user ) return res.redirect('/home')
    res.render('pages/login.ejs');
}

//exporta resposta para requerimento login/register
exports.register = async (req, res) => {
    
    //cria novo objeto com a classe importada, enviamos o requerimento
    const usuario = new Login(req.body)

    //registra novo usuario
    await usuario.register()

    //se houver algum erro
    if(usuario.errors.length > 0) {

        //emite msm de erro 
        req.flash('errors', usuario.errors)

        //e redireciona para login
        req.session.save( () => { return res.redirect('/login'); });
        return
    }

    //caso contrario, foi criado com sucesso
    //emitimos msn de sucesso 
    req.flash('sucess', 'Usuario cadastrado com sucesso')

    //e redirecionamos para /login
    req.session.save( () => { return res.redirect('/login'); });
}

//exporta resposta para requerimento login/login
exports.login = async (req, res) => {

    //cria novo objeto com a classe importada, enviamos o requerimento
    const usuario = new Login(req.body)

    //verifica se o usuario pode logar
    await usuario.verificalogin()

    //se houver erros,  e o erro é salvo na sessão 
    if(usuario.errors.length > 0) {

        //emite msm de erro 
        req.flash('errors', usuario.errors)
    
        //e redirecionamos para a pagina de login
        req.session.save( () => { return res.redirect('/login'); });
        return

    }
    
    //se não houver nenhum erro, pode ser logado
    //emitimos msn de sucesso
    req.flash('sucess', 'Usuario logado com sucesso')

    //eviamos o usuario logado para a sessão
    req.session.user = usuario.user;

    //e direcionamos para inicial
    req.session.save( () => { return res.redirect('/'); });
}

//responsavel por matar a sessão.login
exports.logout = (req, res) => {

    //desloga o usuario 
    req.session.destroy();
    
    //E redireciona para pagina de login
    res.redirect('/login')
}