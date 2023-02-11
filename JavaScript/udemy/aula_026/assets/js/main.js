const form = document.getElementById('formulario');
const result = document.getElementById('resultado');

form.onsubmit = (evento) => {
  evento.preventDefault();
  const peso = Number(document.getElementById('peso').value);
  const altura = Number(document.getElementById('altura').value);
  setResultado(peso, altura);
}

function setResultado(peso, altura) {
  result.innerHTML = ""
  const p = document.createElement('p')
  if (!peso) {
    p.innerHTML = "Peso invalido"
    result.style.backgroundColor = 'rgb(255, 150, 150)';
    result.appendChild(p);
    return
  }
  if (!altura) {
    p.innerHTML = "Altura invalida"
    result.style.backgroundColor = 'rgb(255, 150, 150)';
    result.appendChild(p);
    return
  } 
  const imc = peso / (altura * altura);
  p.innerHTML = `Seu imc é ${imc.toFixed(2)} ${nivelIMC(imc)}`
  result.style.backgroundColor='rgb(109, 255, 182)';
  result.appendChild(p);
}

let nivelIMC = (imc) => {
  nivel = ['(Abaixo do peso)', '(Peso normal)', '(Sobrepeso)', '(Obesidade grau 1)',
  '(Obesidade grau 2)', '(Obesidade grau 3)' ]
  if (imc < 18.5) return nivel[0]
  if (imc < 24.9) return nivel[1]
  if (imc < 29.9) return nivel[2]
  if (imc < 34.9) return nivel[3]
  if (imc < 39.9) return nivel[4]
  return nivel[5]
}