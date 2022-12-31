function verificar(){
    var ano = new Date().getFullYear()
    var anonas = document.getElementById('iano').value
    if(anonas.length = 0 || anonas > ano){
        window.alert('Digite uma idade valida')
    }else{
        var sex = document.getElementsByName('sex')
        var idade = ano - anonas
        var res = document.getElementById('res')
        var img = document.createElement('img')
        res.style.textAlign = 'center'
        img.setAttribute('id','foto')
        if(sex[0].checked){
            sex = 'Mulher'
            if(idade < 10){
                img.setAttribute('src','imagens/bbm.jpeg')
            }else if(idade < 21){
                img.setAttribute('src','imagens/jovm.jpeg')
            }else if(idade < 50){
                img.setAttribute('src','imagens/adultm.jpeg')
            }else{
                img.setAttribute('src','imagens/idosa.jpeg')
            }
        }else if(sex[1].checked){
            sex = 'Homem'
            if(idade < 10){
                img.setAttribute('src','imagens/bbh.jpeg')
            }else if(idade < 21){
                img.setAttribute('src','imagens/jovh.jpeg')
            }else if(idade < 50){
                img.setAttribute('src','imagens/adulth.jpeg')
            }else{
                img.setAttribute('src','imagens/idoso.jpeg')
            }
        }
        res.innerHTML = `Detectamos ${sex} com ${idade} anos.`  
        res.appendChild (img)      
    }
}