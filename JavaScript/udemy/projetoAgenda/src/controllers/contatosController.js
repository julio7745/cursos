exports.index = (req, res) => {
    res.render('pages/contato.ejs', {
        contato:{}
    })
    return
}

const ContatoModel = require('../models/contatoModel')

exports.register = async (req, res) => {
    const contato = new ContatoModel(req.body)
    
    try {
        await contato.register();
    } catch (error) {
        console.log('falha ao criar novo contato em contato.register();');
        console.log(error);
        req.flash('errors')
        req.flash('errors', 'Erro Desconhecido ao criar o contato, entre em contato com o desenvolvedor.') 
        req.session.save( () => { return res.redirect('/'); });
        return
    }
    if (contato.errors.length > 0) { 
        req.flash('errors', contato.errors) 
        req.session.save( () => { return res.redirect('/newcontato'); });
        return 
    }
    req.flash('sucess', 'Contato registrado com sucesso');
    req.session.save( () => { return res.redirect(`/contato/${contato.contato._id}`); });
    return
}

exports.visualise = async (req, res) => {
    const contato = await ContatoModel.buscaPorID(req.params.id)
    if (!contato) return res.render('pages/404.ejs')
    res.render('pages/contato.ejs', { contato })
    return
}

exports.edit = async (req, res) => {
    
    let contato = new ContatoModel(req.body)
    await contato.edit(req.params.id)

    if (contato.errors.length > 0) { 
        req.flash('errors', contato.errors) 
        req.session.save( () => { return res.redirect(`/contato/${req.params.id}`); });
        return
    }
    req.flash('sucess', 'Contato editado com sucesso');
    req.session.save( () => { return res.redirect(`/contato/${contato.contato.id}`); });
    return
}

exports.delete = async (req, res) => {
    
    let contato = new ContatoModel()
    await contato.delete(req.params.id)

    if (contato.errors.length > 0){
        req.flash('errors', contato.errors) 
        req.session.save( () => { return res.redirect(`/contato/${req.params.id}`); });
        return
    }
    req.flash('sucess', 'Contato apagado com sucesso');
    req.session.save( () => { return res.redirect('/'); });
    return
}