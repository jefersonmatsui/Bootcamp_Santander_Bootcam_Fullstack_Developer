/*
Atividade: Conta Bancária
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

1. Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
2. Dentro de ContaBancaria, construa o getter e o setter de saldo;
3. Dentro de ContaBancaria, crie os métodos sacar e depositar;
4. Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
5. Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
6.Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
7. Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
8. Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
9. Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/

class ContaBancaria {
  constructor(agencia, numero, tipo, saldo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor
  }

  sacar(valor) {
    if(valor > this._saldo) {
      return "Operação negada";
    }
    this._saldo = this._saldo - valor;

    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
  }
}

class ContaCorrente extends ContaBancaria{
  constructor(agencia, numero, saldo) {
    super(agenci, numero, saldo);
    this.tipo = 'corrente';
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }
}

class ContaPoupanca extends ContaBancaria{
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo);
    this.tipo = 'poupanca'
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo);
    this.tipo = 'universitaria'
  }

  sacar(valor) {
    if(valor > 500) {
      return "Operação negada!";
    }

    this._saldo = this._saldo - valor;
  }
}



