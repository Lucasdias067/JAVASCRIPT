 
const numero = Number(prompt('digite um numero'));
const numTitulo = document.getElementById('num-titulo')
const texto = document.getElementById('texto')

numTitulo.innerHTML = numero;
texto.innerHTML += `<p>RAIZ QUADRADA: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} É INTEIRO: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>${numero} É NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>ARREDONDA PARA BAIXO: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>ARREDONDA PARA CIMA: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>COM DUAS CASAS DECIMAIS: ${numero.toFixed(2)}</p>`




console.log(`PARA BAIXO: ${baixo}`)
console.log(`PARA CIMA: ${cima}`)
console.log(`DUAS CASAS DECIMAIS: ${casaDecimal}`)
