var hora = new Date().getHours() 
var minuto = new Date().getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`);
if (hora < 12) {
    console.log('Bom dia');
} else if(hora < 19){
    console.log('Boa tarde')
}else{console.log('Boa noite');}