const path = require('path')        //estamos importando o modulo
module.exports = {                  //estmos exportando configurações para que outros possam usar
    mode: 'development', 
    entry: './src/index.js',        //configurando arquivo de entrada
    output: {                                                       //objeto que configura saida
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/eenv']
                }
            }
        }]
    },
    devtool: 'source-map'

}