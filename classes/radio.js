import { Eletronico } from "./eletronico.js";

// Herança
class Radio extends Eletronico {
  // props estáticas
  static estacoes = {
    "89": "RADIO ROCK FM",
    "99.3": "CIDADE FM",
    "100.9": "JOVEM PAM FM",
    "88.1": "GAZETA FM"
  }

  // polimorfismo - reescrita do método
  info() {
    return `Seu rádio ${this.fabricante.nome} está ${ 
      (this.status) ? `ligado e sintonizado na emissora ${Radio.estacoes[this.emissora]}` : 'desligado' }`;
  }
}

export { Radio };
