function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, ' ');
        }
    })
}

ValidaCpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.cpfDigito(cpfParcial);

    return novoCpf === this.cpfLimpo;

}

ValidaCpf.prototype.cpfDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    const regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--;
        return ac;
    }, 0)

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

const cpf = new ValidaCpf('705.484.450-52');
console.log(cpf.valida())

ValidaCpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

if (cpf.valida) { 
    console.log('cpf valido')
}else{ 
    console.log('cpf invalido')
}