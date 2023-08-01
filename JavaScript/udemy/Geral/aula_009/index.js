//Operadores

// + --> adição e concatenação  
let n1 = 2, n2 = 2;
console.log(`Adição: ${n1} + ${n2} = ${n1 + n2}`);

// - --> subtração
console.log(`Subtração: ${n1} - ${n2} = ${n1 - n2}`);

// - --> Multiplicação
console.log(`Multiplicação: ${n1} * ${n2} = ${n1 * n2}`);

// - --> Divisão
console.log(`Divisão: ${n1} / ${n2} = ${n1 / n2}`);

// % --> resto da divisão
n1 = 11, n2 = 5;
console.log(`Divisão: ${n1} % ${n2} = ${n1 % n2}`);

// ** --> potenciação
n1 = 3, n2 = 2;
console.log(`Divisão: ${n1} ^ ${n2} = ${n1 ** n2}`);

// ++ e -- --> incremento e decremento
console.log(`Incremento: ++${n1} = ${++n1}`);
// ++num incrementa antes da ação
// num++ incrementa depois da ação

// Simplificação var = var ** 2      var **= 
console.log(`Incremento de valor: ${n1}+=3  =  ${n1+=3}`);


/*      
        precedencia semelhante ao pradrão da matematica 

        ()
        **
        * / % 
        + - 
        esquerda para direita
        
*/

console.log(`\n`);

n1 = '2', n2 = '1.1'
console.log(`n1 é ${typeof n1}, n2 é ${typeof n2}`);
console.log(`n1 = ${n1}, n2 = ${n2}`);
console.log(`n1 + n2 = ${n1 + n2}`);
console.log(`\n`);

n1  = Number(n1), n2 = Number(n2)
console.log(`n1 é ${typeof n1}, n2 é ${typeof n2}`);
console.log(`n1 = ${n1}, n2 = ${n2}`);
console.log(`n1 + n2 = ${n1 + n2}`);

//Também podemos usar parseInt() para passar para inteiro 
//E parseFloat() para passar para decimal



