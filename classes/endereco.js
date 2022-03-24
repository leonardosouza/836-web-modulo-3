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

// Exportação do Módulo (CommonJS)
// module.exports = Endereco;

// Exportação do Módulo (ES Modules)
export { Endereco };
