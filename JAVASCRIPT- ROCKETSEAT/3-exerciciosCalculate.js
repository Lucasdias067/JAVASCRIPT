//let receitas = ["salario", "investimento"];
//let despesas = ["divídas", "cartão de crédito"];

let familia = {
    receita:[1800, 500], 
    despesas:[160,500,500,]
}



function sum(array) {
    let total = 0;
    for (let value of array){
        total += value
    }
    return total
}

function saldoTotal(){
   const saldoReceitas = sum(familia.receita)
   const saldoDespesas = sum(familia.despesas)
   let total= saldoReceitas - saldoDespesas;

    let positivo = total >= 0
    let negativo = "negativo"

    if (positivo){
        negativo = "positivo"
    }
    console.log(`seu saldo é ${negativo}: $${total}`)
}
let number = (123+1) 
//console.log (string) 
console.log (string=(number)) 
saldoTotal()
