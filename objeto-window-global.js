console.log("=== OBJETO WINDOW - GLOBAL ===");

/*
Conceitos - O que é um objeto?

        |------------|
        |   OBJETO   |
        | -----------|
        /            \ 
     CARACTS        AÇÕES

            |------------|
            |   window   | => this
            |   GLOBAL   | 
            | -----------|
            /            \
          nome         meuCurso()
      -----------      alert()
      | console |      
      -----------
      /         \
     ...        assert()
                clear()
                log()
                dir()
                table()
*/

var nome = "Leonardo";

function meuCurso() {
  return "Web 836 - Lets Code!";
}

console.log(this); // Window
console.log(nome, window.nome);
console.log(meuCurso(), window.meuCurso());
