console.log("=== PROTOTYPE ===");

const escola = "Lets Code"; // string (literal)
const school = new String("Lets Code"); // string (constructor)

// objeto.propriedade
// objeto.metodo()

console.log(escola, escola.constructor);
console.log(school, school.constructor);

// Variáveis criadas a partir do mesmo construtor
// Compartilham a mesma API
console.dir(String);
console.dir(String.prototype); // API String

// Métodos Estáticos
console.log(String.fromCharCode(65)); // letra "A" da tabela ASCII

// Métodos Comuns (API)
console.log(escola.bold()); // transformação
console.log(escola.anchor()); // transformação
console.log(escola); // string imutável

// Sobrescrever o Protótipo (Prototype)
// Sobrescrevendo Métodos / Props
String.prototype.bold = function() {
  return `<strong>${this}</strong>`;
}
console.log(escola.bold());

// Excluir do Protótipo (Prototype)
// Props e Métodos
console.log(escola.blink());
delete String.prototype.blink;
// console.log(escola.blink());

// Adicionar ao Protótipo (Prototype)
// console.log(escola.strong());
String.prototype.cite = function() {
  return `<cite>${this}</cite>`;
}
console.log(escola.cite());
console.dir(String.prototype);
