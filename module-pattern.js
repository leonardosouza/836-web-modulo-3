console.log("=== MODULE PATTERN ===");

// var app = "EXTERNAL"; // closure

// Expressão de Função Invocada Imediatamente - IIFE
// (Revealing) Module Pattern
const MODULE = (function () {
  // var app = "INTERNAL";
  // console.log(app); // EXTERNAL (closure)

  var codeLytics = { count: 0 };

  codeLytics.addCount = function() {
    return ++codeLytics.count;
  }

  codeLytics.clearCount = function() {
    return codeLytics.count = 0;
  }

  codeLytics.getCount = function () {
    return codeLytics.count;
  }

  // Remapeando Objeto - Sua primeira API!
  return {
    add: codeLytics.addCount,
    // clear: codeLytics.clearCount,
    get: codeLytics.getCount
  };

})();

console.log(MODULE);
