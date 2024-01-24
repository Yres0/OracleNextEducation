// let numeroSecreto = 6;
// let numeroUsuario = prompt("Me indicas un n�mero por favor:");

// console.log(numeroUsuario);

// if (numeroUsuario == numeroSecreto) {
    // alert('Acertaste el n�mero');
// }

let numeroSecreto = 6;

// alert('Hola Mundo'); //Muestra un mensaje en pantalla

let numeroUsuario = prompt("Me puedes indicar un numero, por favor"); //prompt solicita algo al usuario
//let es para asignar variables, se usa camellCase

console.log(numeroUsuario); //Almacena una variable o valor en la consola F12 para abrir la consola desde el navegador

if (numeroSecreto == numeroUsuario) {
    alert("Felicidades, acertaste el numero");
} else {
    alert("Sigue intentandolo");
}
// = asignacion y == igual a, para hacer if