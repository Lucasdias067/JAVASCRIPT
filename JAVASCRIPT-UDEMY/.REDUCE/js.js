const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulator, value, indice, array) {
    acumulator += value;
    return acumulator
}, 0)

const pessoas = [
    { name: 'Luiz', age: 62},
    { name: 'Maria', age: 23},
    { name: 'Eduardo', age: 55},
    { name: 'Leticia', age: 10},
    { name: 'Rosana', age: 64},
    { name: 'Wallace', age: 63}
];

const maisVelha = pessoas.reduce(function (ac, value){
    if (ac.age > value.age) return ac;
    return value;
})




console.log(maisVelha)