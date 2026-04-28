// Funções para as operações matemáticas

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Erro: Divisão por zero não permitida!";
  }
  return a / b;
}

// Função principal para fazer as operações
function calcular(operacao, a, b) {
  switch (operacao) {
    case 'soma':
      return somar(a, b);
    case 'subtracao':
      return subtrair(a, b);
    case 'multiplicacao':
      return multiplicar(a, b);
    case 'divisao':
      return dividir(a, b);
    default:
      return "Operação inválida!";
  }
}

// Exemplo de uso
console.log(calcular('soma', 5, 3));          // 8
console.log(calcular('subtracao', 5, 3));     // 2
console.log(calcular('multiplicacao', 5, 3)); // 15
console.log(calcular('divisao', 5, 3));       // 1.666...
console.log(calcular('divisao', 5, 0));       // Erro: Divisão por zero não permitida!