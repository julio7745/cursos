const diaSemana = transfomaDiaDaSemanaEmTexto(new Date().getDay());
console.log(diaSemana);

function transfomaDiaDaSemanaEmTexto(dia){
    switch (dia) {
        case 0:     return 'domingo';
        case 1:     return 'segunda';
        case 2:     return 'terça';
        case 3:     return 'quarta';
        case 4:     return 'quinta';
        case 5:     return 'sexta';
        case 6:     return 'sabado';
        default:    return 'erro';
    }
}