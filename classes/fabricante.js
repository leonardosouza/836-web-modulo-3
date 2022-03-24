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

// Exportação do Módulo (CommonJS)
// module.exports = Fabricante;

// Exportação do Módulo (ES Modules)
export { Fabricante };
