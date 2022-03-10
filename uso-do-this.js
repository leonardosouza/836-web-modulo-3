console.log("=== USO DO THIS ===");

/*
Conceitos - O que é um objeto?

        |------------|
        |   OBJETO   |
        | -----------|
        /            \ 
     CARACTS        AÇÕES

        |-----------|
        |   CAR     |
        | ----------|
       /             \
    PROPS           MÉTODOS
    marca           ligar()
    cor             desligar()
    ano             acelerar()
    modelo          freiar()
    veloMin
    veloMax
*/

var auto = { 
  marca: "Fiat", 
  modelo: "Uno",
  cor: "vermelho",
  ano: 1999,
  velo: {
    min: 0,
    max: 10,
    atual: 0 
  },
  status: false, // desligado
  ligar: function() {
    return this.status = true;
  },
  desligar: function() {
    return this.status = false;
  },
  acelerar: function() {
    if (this.velo.atual == this.velo.max) {
      return this.velo.atual;
    } else if(this.status == true) {
      return ++this.velo.atual;
    } else {
      return this.velo.atual;
    }
  },
  freiar: function() {
    if (this.velo.atual == this.velo.min) {
      return this.velo.atual;
    } else {
      return --this.velo.atual;
    }
  }
};

console.log(auto);
console.log(auto.modelo, auto.ano, auto.cor, auto.velo.max);
