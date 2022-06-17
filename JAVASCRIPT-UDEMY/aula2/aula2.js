function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventForm (e) {
        e.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({ 
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura:altura.value
        })

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value}<br> Peso: ${peso.value} <br> altura: ${altura.value}
        Altura: ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventForm);
}
meuEscopo();
