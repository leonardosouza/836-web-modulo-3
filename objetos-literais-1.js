console.log("=== OBJETO LITERAL ===");

/*
Conceitos - O que é um objeto?

        |------------|
        |   OBJETO   |
        | -----------|
        /            \ 
     CARACTS        AÇÕES

        |-----------|
        |   CARRO   |
        | ----------|
       /             \
    PROPS           MÉTODOS
    marca           buzinar()
    cor             acelerar()
    ano             ligar()
    modelo          desligar()
    motor           freiar()
    direcao         marchaRe()
    acessorios      seta()
*/

// objeto literal (vazio)
const carro = {};

// add propriedades
// dot notation (notação ponto)
// objeto.propriedade; --> ler prop
// objeto.propriedade = valor; --> def prop
carro.marca = "VW";
carro.cor = "preto";
carro.modelo = "Fox";

// bracket notation (notação colchetes)
// objeto["propriedade"]; --> ler prop
// objeto["propriedade"] = valor; --> def prop
carro["ano"] = 2015;
carro["motor"] = 1.6;
carro["acessorios"] = ["vidros verdes", "travas elétricas"];
carro["seta-direita"] = true;

// add métodos
// dot notation (notação ponto)
// objeto.metodo(); --> exec método
// objeto.metodo = function() { }; --> def método
carro.buzinar = function() {
  return "BIBI";
};

carro.ligar = function() {
  return "ON";
};

// bracket notation (notação colchetes)
// objeto["metodo"](); --> exec método
// objeto["metodo"] = function() { }; --> def método
carro["desligar"] = function() {
  return "OFF";
};

carro["acelerar"] = function() {
  return "VRUMMM";
}

console.log( carro );
console.log( carro.ano, carro["modelo"] ); // lendo props
console.log( carro.ligar(), carro["desligar"]() ); // exec métodos

/*

        |------------|
        |   CONSOLE  |
        | -----------|
        /            \ 
     CARACTS        AÇÕES
                    log()
                    dir()
                    table()
                    info()
                    error()
                    warn()
*/
