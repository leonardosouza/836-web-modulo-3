console.log("=== OBJETO LITERAL (AUTO-DEFINIDO) ===");

/*
Conceitos - O que é um objeto?

        |------------|
        |   OBJETO   |
        | -----------|
        /            \ 
     CARACTS        AÇÕES
    Def como      Def o que 
      o obj         o obj
      é!          é capaz de
                    fazer!


        |------------|
        |   PESSOA   |
        | -----------|
        /            \ 
      PROPS        MÉTODOS
      nome         comer()
      altura       andar()
      peso         trabalhar()
      idade        dormir()
      profissao    falar()
      natural      ...
      nacional
      ...
*/

const pessoa = {
  nome: "Jose",
  altura: 1.88,
  peso: 99,
  idade: 35,
  profissao: "dev",
  comer: function() {
    return "nham nham!";
  },
  andar: function() {
    return "clac clac...";
  },
  dormir: function() {
    return "zzz...";
  },
  falar: function() {
    return "bla bla bla!";
  }
};

console.log(pessoa); // objeto
console.log(pessoa.nome, pessoa.profissao); // objeto.prop
console.log(pessoa.comer(), pessoa.dormir()); // objeto.metodo()
