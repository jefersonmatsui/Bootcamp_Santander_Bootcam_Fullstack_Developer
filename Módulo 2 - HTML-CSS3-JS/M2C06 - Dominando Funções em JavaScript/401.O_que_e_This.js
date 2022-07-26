//  THIS: O QUE É?
/* A palavra reservada 'this' é uma referência de contexto.
No exemplo,'this' refere-se ao objeto pessoa*/

const pessoa = {
  firstName: "André",
  lastName: "Soares",
  id: 1,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  getId: function() {
    return this.id;
  }
};

pessoa.fullName(); // "André Soares"
pessoa.getId(); // 1

/* Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

CONTEXTO                  REFERÊNCIA
Em um objeto (método)     Próprio objeto dono do método
Sozinha                   Objeto global (em navegadores, window)
Função                    Objeto global 
Evento                    Elemento que recebeu o evento
*/

