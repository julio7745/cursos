let varA = 'A';
let varB = 'B';
let varC = 'C';

/*const varAbackup = varB
varB = varC
varC = varA
varA = varAbackup*/

// ou

[varA, varB,  varC] = [varB, varC, varA]

console.log(varA, varB, varC);