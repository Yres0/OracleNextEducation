
let numeroMaximo = 10; // Para asignar el limite del numero para el juego
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1; // Se evita que genere 0 y muestre el 10, genera numeros aleatorios por consola
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntentos = 'intento';
let maxIntentos = 3;

while(numeroSecreto != numeroUsuario){ // Condicion diferente a, bucle mientras algo se cumpla, se ejecuta el bloque de instrucciones

    numeroUsuario = parseInt(prompt(`Me indicas un numero del 1 al ${numeroMaximo}, por favor.`)); // Solicita escribir algo al usuario es string
    console.log(numeroUsuario); //Almacena una variable o valor en la consola, F12 para abrir la consola desde el navegador

    if(numeroSecreto == numeroUsuario){
        alert(`Felicidades, acertaste, el numero es: ${numeroUsuario}. Logrado en: ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`); // Muestra un mensaje con su variable en pantalla
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor.'); // Muestra un mensaje en pantalla
        } else {
            alert('El numero secreto es mayor.');
        }
    }

    intentos++; // Incremento de contador cuando no acierta
    //palabraIntentos = 'intentos'; // Cambiar el valor de una variable para mostrar un mensaje correctamente

    if(intentos > maxIntentos){
        alert(`Llegaste al numero maximo de ${maxIntentos} intentos.`);
        break; // Funciona para detener forzosamente un bloque de codigo
    }

}

// ${evaluacion ? hacer si es true : hacer si es false} Operador Ternario, el ? simboliza el if y el : el else
// typeof() para saber que tipo de dato es una variable
// parteInt() para convertir texto a dato