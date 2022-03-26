// Importação do Módulo (CommonJS)
// const Endereco = require("./classes/endereco");
// const Fabricante = require("./classes/fabricante");
// const Televisao = require("./classes/televisao");

// Importação do Módulo (ES Modules)
import { Endereco } from "./classes/endereco.js";
import { Fabricante } from "./classes/fabricante.js";
import { Televisao } from "./classes/televisao.js";
import { Radio } from "./classes/radio.js";
import { Eletronico } from "./classes/eletronico.js";
import { Ipod } from "./classes/ipod.js";

const jbl = new Fabricante("JBL", 1980, "BRA", "jbl.jpg", {});
const lg = new Fabricante("LG", 1995, "USA", "lg.jpg", {});

const radio = new Radio("89", jbl, 50);
try {
  console.log(radio);
  console.log(radio.info());
  radio.ligar();
  console.log(radio.info());
  // radio.desligar();
  console.log(radio.aumentarVolume());
  console.log(radio.diminuirVolume());
  console.log(radio.aumentarVolume());
} catch (error) {
  console.log(error);
}


const tv = new Televisao("7", lg, 100, false, 55);
try {
  console.log(tv);
  console.log(tv.info());
  tv.ligar();
  console.log(tv.canalSintonizado());
  console.log(tv.info());
  // tv.desligar();
  console.log(tv.aumentarVolume());
  console.log(tv.diminuirVolume());
  console.log(tv.aumentarVolume());
  console.log(tv.polegadas);
} catch (error) {
  console.log(error);
}

const ipod = new Ipod(null, new Fabricante("Apple"), 25, true);
console.log(ipod);
console.log(ipod.info());


/*
const enderecoLg = new Endereco("R States", 4321, "08040160", "Orlando", "Florida", "US");
const fabricLg = new Fabricante("LG", 1995, "USA", "lg.jpg", enderecoLg);
const tvDaLg = new Televisao(fabricLg, 70, 5, 25, false);

console.log("INICIO:", tvDaLg.info() );

try {
  tvDaLg.ligar();
  tvDaLg.mudarCanal(2); // CULTURA
  tvDaLg.mudarCanal(7); // RECORD
  // tvDaLg.desligar();
  tvDaLg.mudarCanal(5); // GLOBO
} catch (error) {
  console.log( error );
  tvDaLg.ligar();
}

console.log("FIM:", tvDaLg.info() );


const endGradiente = new Endereco("R States", 4321, "08040160", "Orlando", "Florida", "US");
const gradiente = new Fabricante("Gradiente", 1980, "BRA", "gradiente.jpg", endGradiente);
const radio = new Radio(gradiente, 89, 50, false);

console.log("\n", radio);

console.log("INICIO:", radio.info() );

try {
  radio.ligar();
  radio.mudarEstacao("99.3"); // CIDADE
  //radio.desligar();
  radio.mudarEstacao("89"); // ROCK
} catch (error) {
  console.log( error );
}

console.log("FIM:", radio.info() );

*/
