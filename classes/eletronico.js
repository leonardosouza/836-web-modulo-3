class Eletronico {
  constructor(emissora=null, fabricante=null, volume=0, status=false) {
    this.#emissora = emissora;
    this.#volume = volume;
    this.#status = status;
    this.#fabricante = fabricante;
  }

  static msg = {
    "SINTONIZAR_EXCEP": `Não foi possível sintonizar, pois o aparelho está desligado!`,
    "AUMENTAR_VOL_EXCEP": `Não foi possível aumentar o volume porque o aparelho está desligado!`,
    "DIMINUIR_VOL_EXCEP": `Não foi possível diminuir o volume porque o aparelho está desligado!`
  };

  // props
  #emissora
  #volume
  #status
  #fabricante

  get emissora() {
    return this.#emissora;
  }

  get status() {
    return this.#status;
  }

  get fabricante() {
    return this.#fabricante;
  }

  ligar() {
    return this.#status = true;
  }

  desligar() {
    return this.#status = false;
  }

  alterarEmissora(numero = this.#emissora) {
    if (this.#status) return this.#emissora = numero;
    throw new Error(Eletronico.msg.SINTONIZAR_EXCEP); // Lançou uma excessão
  }

  aumentarVolume() {
    if (this.#status) return this.#volume += 1;
    throw new Error(Eletronico.msg.AUMENTAR_VOL_EXCEP); // Lançou uma excessão
  }

  diminuirVolume() {
    if (this.#status) return this.#volume -= 1;
    throw new Error(Eletronico.msg.DIMINUIR_VOL_EXCEP); // Lançou uma excessão
  }

  info() {
    return `Seu aparelho ${this.#fabricante.nome} está ${ 
      (this.#status) ? `ligado e sintonizado na emissora ${this.#emissora}` : 'desligada' }`;
  }

}

export { Eletronico };
