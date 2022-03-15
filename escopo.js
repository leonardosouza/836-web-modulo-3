console.log("=== ESCOPO ===");

// Problema - Não tenho controle sobre o escopo global

console.log(this); // obj contexto da execução (window) => escopo global

var linguagem = "Javascript!"; // a variável é definida no escopo global
console.log(linguagem); // pode-se omitir o obj global (window)
console.log(window.linguagem); // a variável é uma prop do escopo global

function minhaLinguagemPreferida() { // a função é definida no escopo global
  return "JS!";
}
console.log(minhaLinguagemPreferida()); // pode-se omitir o obj global (window)
console.log(window.minhaLinguagemPreferida()); // a função é um método no escopo global

// Solução - Aplicar um mecanismo para controlar o escopo
var curso = "Web Degree EXTERNAL"; // global

function testeEscopo() {
  var curso = "WEB DEGREE Internal"; // variável global implícita
  return curso;
}

console.log(testeEscopo()); // Web Degree Internal
console.log(window.curso); // Web Degree EXTERNAL
console.log(curso); // Web Degree EXTERNAL

{ let modulo = "POO"; } // ES6 OU > - ESCOPO POR CHAVES (let / const)

// console.log(window.modulo);
// console.log(modulo);

