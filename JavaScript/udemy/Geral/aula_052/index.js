//Escopo lexo 

//uma função busca a variavel a partir de onde foi declarada, não de onde foi chamada 
const nome = 'julio' 
function falaNome() {
    console.log(nome)
}
function usaFalaNome() {
    const nome = 'carvalho'
    falaNome();
}
usaFalaNome();