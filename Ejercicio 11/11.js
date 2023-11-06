//EJERCICIO 11
let num1 = Number(prompt('Ingrese un numero'));
let mensaje = "El numero " + num1 + " es divisible por "; 
let divisiblePorAlguno = false;

  if (num1 % 2 === 0) {
    mensaje += "2";
    divisiblePorAlguno = true;
  }
  if (num1 % 3 === 0) {
    if (divisiblePorAlguno) {
      mensaje += " , 3";
    } else {
      mensaje += "3";
    }
    divisiblePorAlguno = true;
  }
  if (num1 % 5 === 0) {
    if (divisiblePorAlguno) {
      mensaje += " , 5";
    } else {
      mensaje += "5";
    }
    divisiblePorAlguno = true;
  }
  if (num1 % 7 === 0) {
    if (divisiblePorAlguno) {
      mensaje += " y 7";
    } else {
      mensaje += "7";
    }
    divisiblePorAlguno = true;
  }

  if (divisiblePorAlguno) {
    console.log (mensaje) ;
  } else {
    console.log(`El numero ${num1} no es divisible por 2, 3, 5 ni 7.`);
  }