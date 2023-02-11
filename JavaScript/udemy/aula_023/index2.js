
let ligado = 0;
if(ligado === 1 ){
    console.log('ligado');
}

// Pose ser simplificado em 
ligado = 0;
ligado && console.log('ligado');

//Outro exemplo, porem com funçao 
ligado = 1;
falaoi = () => 'oi'        // --> 'oi' é o retorno da função
ligado && console.log(falaoi());