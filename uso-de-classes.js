// Importação do Módulo (CommonJS)
// const Endereco = require("./classes/endereco");
// const Fabricante = require("./classes/fabricante");
// const Televisao = require("./classes/televisao");

// Importação do Módulo (ES Modules)
import { Endereco } from "./classes/endereco.js";
import { Fabricante } from "./classes/fabricante.js";
import { Televisao } from "./classes/televisao.js";

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
