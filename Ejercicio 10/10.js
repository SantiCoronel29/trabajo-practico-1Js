//EJERCICIO 10
let num1 = Number(prompt('Ingrese un numero'));

if (num1 % 2 === 0){
    console.log(`El numero ${num1} es divisible en 2`);
} else if (num1 % 3 === 0){
        console.log(`El numero ${num1} es divisible en 3`);
    } else if (num1 % 5 === 0) {
        console.log(`El numero ${num1} es divisible en 5`);
    }
 else if (num1 % 7 === 0){
        console.log(`El numero ${num1} es divisible en 7`);
    } else {
        console.log(`El numero ${num1} no es divisible por 2 , 3 , 5 ni 7`);
    }