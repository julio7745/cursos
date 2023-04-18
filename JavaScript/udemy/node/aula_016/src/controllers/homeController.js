exports.home = (req, res) => {
    res.render('index.ejs', {
        titulo: 'Esse é o titulo da <span style="color:red">pagina 1</span>',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
}

exports.home2 = (req, res) => {
    res.render('index.ejs');
}
