function calcularFactorial(numero) {

    if (numero < 0 || !Number.isInteger(numero)) {
      return "El número debe ser un entero positivo.";
    }
  
    let factorial = 1;
  

    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  

  const numero = 3;
  const resultado = calcularFactorial(numero);
  
  if (typeof resultado === "number") {
    console.log(`El factorial de ${numero} es: ${resultado}`);
  } else {
    console.log(resultado);
  }
  