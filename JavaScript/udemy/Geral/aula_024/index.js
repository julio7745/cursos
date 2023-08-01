// if, else if, e else 
let hr = 18
let cumprimento = (hr) => {
    if (hr <= 12){return 'Bom dia';} else
    if (hr <= 17){return 'Bom tarde';} else
    { return 'Boa noite';}
}
console.log(cumprimento(hr));