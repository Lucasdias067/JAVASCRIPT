export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor = Conta){
            throw new Error("Não pode isso, pois é uma classe abstrata")
        }
    }

    get saldo(){
        return this._saldo;
    }

    get cliente(){
        return this._cliente
    }

    get agencia(){
        return this._agencia;
    }

    set cliente (novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    sacar(valor){
       throw new Error("Esta é um método abstrato, chame-o na classe")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}