//ANTES
// cria função que enviar as mensagens de erro e sucesso, do flash 
// e tbm o usuario, da requisição 
// para a resposta .
exports.messages = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.sucess = req.flash('sucess')
    res.locals.user = req.session.user
    next()
}

//ANTES
//cria função que checa se o usuario esta logado ao navegar entre paginas 
exports.checklogin = (req, res, next) => {

    //pega o que foi requisitado, e seleciona os 6 primeiros caracteres 
    //(ESSE VALOR VEM DE "/login", POIS É A MENOR REQUISIÇÃO PERMITIDA,
    //QUANDO NÃO ESTA LOGADO) 
    const rota = req.path.slice(0, 6)

    //declara as rotas permitidas
    const rotasPermitidas = [ '/login', '/asset', '/favic' ]

    //Se nas rotas permitidas, não incluir a rota requisitada
    if( !rotasPermitidas.includes(rota)){

        //ent, verifica se o usuario esta logado
        if( !req.session.user ) {

            //se não tiver logado, emite o erro 
            req.flash('errors', 'Você precisa estar logado')

            //E redireciona para a pagina de login
            req.session.save(() => res.redirect('/login'));
            return
        }
    }
    
    //caso contrario passa para a proxima execução
    next()
}

//DEPOIS
// em ultimo caso, (depois das rotas) envia a pagina de erro404
exports.check404Error = (req, res, next) => res.render('pages/404.ejs')
