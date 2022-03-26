import { Eletronico } from "./eletronico.js";

// Herança
// new Televisao("7", lg, 100, false, 55)
class Televisao extends Eletronico {
  constructor (emissora=null, fabricante=null, volume=0, status=false, polegadas=0) {
    super(emissora, fabricante, volume, status);
    this.#polegadas = polegadas;
  }

  // props estáticas
  static canais = {
    2: "CULTURA",
    5: "GLOBO",
    7: "RECORD",
    13: "BAND"
  }

  #polegadas

  get polegadas() {
    return this.#polegadas;
  }

  // só consigo acessar membros públicos
  canalSintonizado() {
    return this.emissora;
  }

  // polimorfismo - reescrita do método
  info() {
    return `Sua TV ${this.fabricante.nome} de ${this.#polegadas}" está ${ 
      (this.status) ? `ligada e sintonizada na emissora ${Televisao.canais[this.emissora]}` : 'desligada' }`;
  }
}

// Exportação do Módulo (CommonJS)
// module.exports = Televisao;

// Exportação do Módulo (ES Modules)
export { Televisao };
