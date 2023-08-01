
const saida = document.getElementsByTagName('h1')[0]
const dataAtual = formataDataAtual(new Date());

saida.innerText = dataAtual;

function formataDataAtual(data){
    const diaDaSemana = formataDiaDaSemana(data.getDay());
    const diaDoMes = data.getDate();
    const mes = formataMes(data.getMonth());
    const ano = data.getFullYear();
    const hora = data.getHours() > 9 ? data.getHours() : `0${data.getHours()}`;
    const minuto = data.getMinutes() > 9 ? data.getMinutes() : `0${data.getMinutes()}`;  

    function formataDiaDaSemana(diaDaSemana){

        /*switch (diaDaSemana) {
        case 0: return 'Domingo';
        case 1: return 'Segunda-feira';
        case 2: return 'Terça-Feira';
        case 3: return 'Quarta-feira';
        case 4: return 'Quinta-feira';   
        case 5: return 'Sexta-feira';
        case 6: return 'Sabado';
        default:
            return 'erro';
        }*/

        const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']
        return dias[diaDaSemana];
    }
    function formataMes(mes){

        /*switch (mes) {
        case 0: return 'Janeiro';
        case 1: return 'Fevereiro';
        case 2: return 'Março';
        case 3: return 'Abril';   
        case 4: return 'Maio';
        case 5: return 'Junho';
        case 6: return 'Julho';
        case 7: return 'Agosto';
        case 8: return 'Setembro';
        case 9: return 'Outubro';
        case 10: return 'Novembro';   
        case 11: return 'Dezembro';
        default:
            return 'erro';
        }*/

        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        return meses[mes];
    }

    return `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano} ${hora}:${minuto}`
}
