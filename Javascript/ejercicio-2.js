//EJERCICIO 1
let edad = prompt('Ingrese su edad');

if (!isNaN(edad)){
    if (edad >= 18){
        console.log('La persona puede conducir');
    } else {
        console.log('La persona no puede conducir');
    }
    
} else {
    console.log('La edad ingresada no es un numero valido');
}
