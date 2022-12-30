function carregar(){
    var msg = window.document.querySelector('#msg');
    var img= window.document.querySelector('#img');
    var hora = new Date().getHours();
    msg.innerHTML = `<p>Agora são ${hora} horas!</p>`;
    if (hora < 12){
        img.src=('imagens/manha.jpg')
        window.document.body.style.background = '#e2cd9f'
        msg.innerHTML += '<p><strong>Bom dia!</strong><\p>';
    }else if (hora < 18){
        img.src=('imagens/tarde.jpg')
        window.document.body.style.background = '#b9846f'
        msg.innerHTML += '<p><strong>Boa Tarde!</strong><\p>';
    }else{
        img.src=('imagens/noite.jpg')
        window.document.body.style.background = '#5b3477'
        msg.innerHTML += '<p><strong>Boa Noite!</strong><\p>';
    }
}
