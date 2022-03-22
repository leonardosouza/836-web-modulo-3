class Endereco {
  constructor(rua, numero, cep, bairro, cidade, estado) {
    this.rua = rua;
    this.numero = numero;
    this.cep = cep;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }
}


class Fabricante {
  constructor(nome, fundadoEm, paisDeOrigem, logoMarca, endereco) {
    this.nome = nome;
    this.fundadoEm = fundadoEm;
    this.paisDeOrigem = paisDeOrigem;
    this.logoMarca = logoMarca;
    this.endereco = endereco;
  }

  getEndereco() {
    // destructuring object
    const { rua, numero, cep, bairro, cidade, estado } = this.endereco;

    return `${rua}, ${numero} - ${cep} - ${bairro} - ${cidade} - ${estado}`;
  }
}

class Televisao {
  constructor(fabricante=null, polegadas=0, canal=0, volume=0, ligada=false) {
    this.#canal = canal;
    this.#volume = volume;
    this.#ligada = ligada;
    this.#fabricante = fabricante;
    this.#polegadas = polegadas;
    
    // this.#canaisAbertos = {
    //   2: "CULTURA",
    //   5: "GLOBO",
    //   7: "RECORD",
    //   13: "BAND"
    // };
  }

  // props estáticas
  static canais = {
    2: "CULTURA",
    5: "GLOBO",
    7: "RECORD",
    13: "BAND"
  }

  static msg = {
    "MUDAR_CANAL_EXCEP": `Não foi possível mudar o canal porque a TV está desligada!`,
    "AUMENTAR_VOL_EXCEP": `Não foi possível aumentar o volume porque a TV está desligada!`,
    "DIMINUIR_VOL_EXCEP": `Não foi possível diminuir o volume porque a TV está desligada!`
  };

  // props
  #canal
  #volume
  #ligada
  #fabricante
  #polegadas
  // #canaisAbertos

  // métodos
  ligar() {
    return this.#ligada = true;
  }

  desligar() {
    return this.#ligada = false;
  }

  mudarCanal(numero = this.#canal) {
    if (this.#ligada) return this.#canal = numero;
    throw new Error(Televisao.msg.MUDAR_CANAL_EXCEP); // Lançou uma excessão
  }

  aumentarVolume() {
    if (this.#ligada) return this.#volume += 1;
    throw new Error(Televisao.msg.AUMENTAR_VOL_EXCEP); // Lançou uma excessão
  }

  diminuirVolume() {
    if (this.#ligada) return this.#volume -= 1;
    throw new Error(Televisao.msg.DIMINUIR_VOL_EXCEP); // Lançou uma excessão
  }

  info() {
    return `Sua TV ${this.#fabricante.nome} está ${ 
      (this.#ligada) ? 'ligada no canal ' + Televisao.canais[this.#canal] : 'desligada' }`;
  }
}

// OPERADOR TERNÁRIO: (condition) ? true : false

const enderecoSony = new Endereco("R Tokio", 123, 08030200, "Okinawa", "Tokio", "TK");
const fabricSony = new Fabricante("SONY", 1987, "JAPAN", "sony.jpg", enderecoSony);
const tvSony = new Televisao(fabricSony, 55, 2, 10, false);
// sony.#fabricante = "Sony";
// console.log( fabricSony );
console.log( tvSony );
// console.log(fabricSony.getEndereco())
console.log("FINAL:", tvSony.info() );

const enderecoLg = new Endereco("R States", 4321, 08040160, "Orlando", "Florida", "US");
const fabricLg = new Fabricante("LG", 1995, "USA", "lg.jpg", enderecoLg);
const tvDaLg = new Televisao(fabricLg, 70, 5, 25, false);
console.log(tvDaLg);

try {
  tvDaLg.ligar();
  tvDaLg.mudarCanal(2); // CULTURA
  tvDaLg.mudarCanal(7); // RECORD
  tvDaLg.desligar();
  tvDaLg.mudarCanal(5); // GLOBO
} catch (error) {
  console.log( error );
  tvDaLg.ligar();
}

console.log("FINAL:", tvDaLg.info() );
