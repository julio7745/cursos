let texto = "era uma vez um saci"
//           0123456789

console.log(texto.indexOf('a'));        // procura a posição do primeiro 'a'
console.log(texto.indexOf('a', 3));     // procura a posição do primeiro 'a' a partir do indice 3
console.log(texto.lastIndexOf('a'));    // procura a posição do ultimo 'a'

console.log(texto.indexOf("vez"));       // procura a posição do primeiro 'vez'

console.log(texto.match(/[a-z]/g));      // retrona todos os valores que foram achados da expressão regular

console.log(texto.search(/a/g));      // retrona todos os valores que foram achados da expressão regular

texto = "O rato roeu a roupa do rei de roma "

console.log(texto.replace('r', 's'));       //  substitui os valores encontrados na primeira vez
console.log(texto.replace(/r/, 's'));       //  substitui os valores encontrados na primeira vez

console.log(texto.replace(/r/g, 's'));       //  substitui todos os valores encontrados

console.log(texto.length);

texto = "era uma vez um saci"
//       0123456789    54321

console.log(texto.slice(4));
console.log(texto.slice(4, 7));
console.log(texto.slice(-4));

console.log(texto.split(" "));
console.log(texto.split("a"));
console.log(texto.split(" ", 3));

texto = "erA uMa VEz um SAci"

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
