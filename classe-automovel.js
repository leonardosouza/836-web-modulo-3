console.log("=== CLASSES - ESx ===");

/*
        |-----------|
        |   CARRO   | => ENTIDADE
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

// modelo
class Automovel {
  // inicializa o objeto
  constructor(modelo, marca, ano, cor, km=0, preco=0) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.#cor = cor;
    this.status = false;
    this.#km = km;
    this.#preco = preco;
    this.velocidade = {
      min: 0,
      max: 150,
      atual: 0
    }
  }
  
  // props (públicas)
  // marca
  // modelo
  // ano
  // cor

  // props (privadas)
  #preco
  #km
  #cor

  // método getter
  get km() {
    return this.#km;
  }

  get preco() {
    return this.#preco;
  }

  get cor() {
    return this.#getCor();
  }

  // método setter
  set preco(valor) {
    return this.#preco = valor;
  }

  // métodos (públicos)
  ligar() {
    return this.status = true;
  }

  desligar() {
    return this.status = false;
  }

  acelerar() {
    if (this.status && this.velocidade.atual < this.velocidade.max) {
      this.velocidade.atual += 10;
    }

    return this.velocidade.atual;
  }

  frear() {
    if (this.velocidade.atual > this.velocidade.min) {
      this.velocidade.atual -= 10;
    }

    return this.velocidade.atual;
  }

  // métodos (privados)
  #getCor() {
    return `O ${this.modelo} é da cor ${this.#cor}`;
  }

  // getPreco() {
  //   return this.#preco;
  // }

  // setPreco(valor) {
  //   return this.#preco = valor;
  // }
}

// instancia => vai gerar o objeto
const celta = new Automovel("Celta", "GM", 2000, "branco", 90000, 1500);
celta.velocidade.max = 50;
console.log( celta ); // Automovel {}
// celta.ligar();
// console.log( celta ); // Automovel {}
// celta.desligar();
// console.log( celta ); // Automovel {}

/*
const uno = new Automovel;
uno.marca = "Fiat";
uno.modelo = "Uno";
uno.ano = 2000;
uno.cor = "verde";
console.log( uno ); // Automovel {}

const palio = new Automovel;
palio.marca = "Fiat";
palio.modelo = "Palio";
palio.ano = 2015;
palio.cor = "vermelho";
console.log( palio ); // Automovel {}

console.log("\n\n");
*/

