function somarNumeros() {
    let soma = 0;  
    for (let i = 1; i <= 5; i++) {
      let numero = parseFloat(prompt(`Informe o ${i}º número:`));
      soma += numero;  
    }
    alert(`A soma dos números informados é: ${soma}`);
  }
  somarNumeros();