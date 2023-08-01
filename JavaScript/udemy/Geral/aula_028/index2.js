let dataAtual = new Date();
dataAtual = formatData(dataAtual)

function formatData(data) {
    const dia = data.getDate() > 10 ? data.getDate() : `0${data.getDate()}`;
    const mes = data.getMonth() > 10 ? data.getMonth() : `0${data.getMonth()}`;
    const ano = data.getFullYear() > 10 ? data.getFullYear() : `0${data.getFullYear()}`;
    const hora = data.getHours() > 10 ? data.getHours() : `0${data.getHours()}`;
    const minuto = data.getMinutes() > 10 ? data.getMinutes() : `0${data.getMinutes()}`;

    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}
console.log(dataAtual)