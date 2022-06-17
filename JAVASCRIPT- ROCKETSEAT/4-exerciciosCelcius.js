//C = (F - 32) * 5/9 

//F = C * 9/5 + 32;

function transform(degree) {
    const celsius = degree.toUpperCase().includes("C")
    const fahrenheit = degree.toUpperCase().includes("F")

    if(!celsius && !fahrenheit){
        throw new Error("grau não identificado")
    }
    
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9;
    let degressSign = 'C'

    if (celsius){
         updatedDegree = Number(degree.toUpperCase().replace("C", ""))
         formula = celsius =>  celsius * 9/5 + 32;
         degressSign = 'F'
    }

    return formula(updatedDegree) + degressSign
}

try {
    console.log(transform("50f"))
    console.log(transform("10c"))
    transform("50t")
} catch(e) {
    console.log(e)
} 