//const numeros = [1, 2, 3, 4, 50, 70, 80, 100]
//
//function callbackFilter (valor, indice, array) {
//   // if (valor > 10) return true;
//    return valor > 10 ? true : false;
//}
//
////const numerosFiltrados = numeros.filter(callbackFilter);
//const numerosFiltrados = numeros.filter(valor => valor > 10);
//
//console.log(numerosFiltrados);


const pessoas = [
    { name: 'Luiz', age: 62},
    { name: 'Maria', age: 23},
    { name: 'Eduardo', age: 55},
    { name: 'Leticia', age: 19},
    { name: 'Rosana', age: 32},
    { name: 'Wallace', age: 47}
];

const pessoasAge = pessoas.filter(function (valor) { 
    return valor.age >= 50
    //console.log(letras);
})

const pessoasName = pessoas.filter(function (valor) {
    return valor.name.length > 5;
})

const terminaA = pessoas.filter(valor => valor.name.toLowerCase().endsWith('a'))
console.log(terminaA);