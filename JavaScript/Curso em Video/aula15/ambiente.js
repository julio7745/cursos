var num = [5,8,9,4, ,7]
console.log(num);
num[6]=6
console.log(num);
num.push(7)
console.log(num);
num.sort();
console.log(num);
/*
for (var pos = 0; pos < num.length; pos++ )
{
    console.log(`A posição ${pos} esta preenchida pelo valor ${num[pos]}`);
}
*/
for (var pos in num){
    console.log(`A posição ${pos} esta preenchida pelo valor ${num[pos]}`);
}