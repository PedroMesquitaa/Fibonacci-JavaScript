function pertenceFibonacci(numero) {
    let a = 0, b = 1;

    while (b < numero) {
      let temp = b;
      b = a + b;
      a = temp;
    }

    if (b === numero || numero === 0) {
      console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }
  }
  

  const numero = 19;  // Alterar para o valor desejado
  pertenceFibonacci(numero);
  