//exporta resposta para requerimento /newContato
exports.index = (req, res) => {

    //envia a pagina de contato, e como dados de contato, um ctt limpo
    res.render('pages/contato.ejs', {
        contato:{}
    })
    return
}

//importa modelo de objeto contato
const ContatoModel = require('../models/contatoModel')

//exporta resposta para requerimento /NewContato/register
exports.register = async (req, res) => {

    //cria objeto de ctt
    const contato = new ContatoModel(req.body)
    
    //registra o contato para o usuario logado
    await contato.register(req.session.user._id);

    //se existir erros no formulario
    if (contato.errors.length > 0) { 

        //enviamos o erros 
        req.flash('errors', contato.errors) 

        //e encaminhamos para a pagina de cadastrar ctt
        req.session.save( () => { return res.redirect('/newcontato'); });
        return 
    }

    //se não existir, já cadastramos o contato, portanto enviamos a msn de sucesso 
    req.flash('sucess', 'Contato registrado com sucesso');

    //e redirecionamos para a pagina de edição do contato
    req.session.save( () => { return res.redirect(`/contato/${contato.contato._id}`); });
    return
}

//exporta resposta para requerimento /contato/:id
exports.visualise = async (req, res) => {

    //busca dados do contato
    const contato = await ContatoModel.buscaDadosCtt(req.params.id)

    //se não exixtr ctt para o id da url, enviamos a pagina de 404 
    if (!contato) return res.render('pages/404.ejs')

    //caso contrario, exibimos a pagina de edição do contato
    res.render('pages/contato.ejs', { contato })
    return
}

//exporta resposta para requerimento /editcontato/:id
exports.edit = async (req, res) => {
    
    //criamos o modelo de objeto ctt
    let contato = new ContatoModel(req.body)

    //editamos o contato
    await contato.edit(req.params.id)

    //se houver erros, enviamos e redirecionamos para a pagina de editar ctt
    if (contato.errors.length > 0) { 
        req.flash('errors', contato.errors) 
        req.session.save( () => { return res.redirect(`/contato/${req.params.id}`); });
        return
    }

    //se não houver, houve sucesso na edição do ctt
    //emitimos a mensagem de sucesso
    req.flash('sucess', 'Contato editado com sucesso');

    // e redirecionamos para a pagina do contato
    req.session.save( () => { return res.redirect(`/contato/${req.params.id}`); });
    return
}

//exporta resposta para requerimento /excluirctt/:id
exports.delete = async (req, res) => {
    
    //criamos o modelo de objeto ctt
    let contato = new ContatoModel()

    //excluimos o contato
    await contato.delete(req.params.id)

    //se houver erros, enviamos e redirecionamos para a pagina de editar ctt
    if (contato.errors.length > 0){
        req.flash('errors', contato.errors) 
        req.session.save( () => { return res.redirect(`/contato/${req.params.id}`); });
        return
    }
    
    //se não houver, houve sucesso ao apagar o ctt
    //emitimos a mensagem de sucesso
    req.flash('sucess', 'Contato apagado com sucesso');
    
    // e redirecionamos para a pagina inicial
    req.session.save( () => { return res.redirect('/'); });
    return
}