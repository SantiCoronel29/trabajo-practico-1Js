//EJERCICIO 9
let frase = prompt('Ingrese una frase');
let vocales = ' ';
let i = 0;

while (i < frase.length){
    if (
frase.charAt(i).toLowerCase() == 'a' || 
frase.charAt(i).toLowerCase() == 'e' || 
frase.charAt(i).toLowerCase() == 'i' || 
frase.charAt(i).toLowerCase() == 'o' || 
frase.charAt(i).toLowerCase() == 'u') {
    vocales += frase.charAt(i).toLowerCase(); 
}
i++;
}
console.log(vocales);