const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pessoas = [
    { name: 'Luiz', age: 62},
    { name: 'Maria', age: 23},
    { name: 'Eduardo', age: 55},
    { name: 'Leticia', age: 19},
    { name: 'Rosana', age: 32},
    { name: 'Wallace', age: 47}
];

const nomes = pessoas.filter(valor => valor.name)  

//
const idades = pessoas.map(valor => valor.age)  

const comId = pessoas.map(function(valor, indice) {
    valor.id = indice
    return valor
})


const dobro = numeros.map(valor => valor * 2)

console.log(dobro);