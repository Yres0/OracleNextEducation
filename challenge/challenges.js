/*  Practicar la lógica de programación, incluyendo conceptos como variables
condicionales (if), alertas (alert), solicitudes (prompt) es esencial para tu carrera
y desarrollo. Estos fundamentos proporcionan la base para resolver problemas de manera
estructurada, tomar decisiones en el código, crear bucles controlados e interactuar
eficazmente con las personas.
Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías
sino que también te capacita para generar soluciones innovadoras, depurar de manera eficiente
y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir
tiempo en estos principios desde el principio es fundamental para construir una carrera
exitosa en el campo de la programación.
Con esto en mente, hemos creado una lista de actividades (no obligatorias)
centradas en la práctica para mejorar aún más tu experiencia de aprendizaje.
¿Listo para practicar?

Desafíos

1. Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
2. Declara una variable llamada nombre y asígnale el valor "Luna".
3. Crea una variable llamada edady asígnale el valor 25.
4. Establece una variable numeroDeVentas y asígnale el valor 50.
5. Establece una variable saldoDisponible y asígnale el valor 1000.
6. Muestra una alerta con el texto "¡Error! Completa todos los campos".
7. Declara una variable llamada mensajeDeError y asígnale el valor "¡Error!
    Completa todos los campos". Ahora muestra una alerta con el valor de la variable
    mensajeDeError .
8. Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
9. Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
10. Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje
    "¡Puedes obtener tu licencia de conducir!".
    
Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección
"Opinión del instructor".
*/

alert('¡Bienvenida y bievenido a nuestro sitio web!');

let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

alert('¡Error! Completa todos los campos');

let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

let nombre = prompt("Oye, ¿Cual es tu nombre?");
let edad = prompt("Oye, ¿Me puedes decir tu edad?");

if(edad >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
}

/*
Programar requiere práctica. Hemos creado una lista adicional de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje. ¿Listo para practicar?

Desafíos:

Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
Si necesitas ayuda, las opciones de solución de las actividades estarán disponibles en la sección “Opinión de la persona instructora”.
*/

let aquiVanLosOtrosDesafios = 'Hola';


/*
Hemos llegado a otra lista de actividades (no obligatorias) para que practiques
y refuerces aún más tu aprendizaje. ¿Vamos a hacerlo?

Desafíos:

Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
Si necesitas ayuda, las opciones de solución para las actividades estarán disponibles en la sección "Opinión del instructor".
*/

let contador = 1; //1

while(contador <= 10){
    alert(`El valor del contador es ${contador}`);
    contador++;
}

let contador = 10; //2

while(contador >= 0){
    alert(`El valor del contador es ${contador}`);
    contador--;
}

let cuenta = prompt('Introduce un numero cualquiera.'); //3
let contador = 0;

while(contador <= cuenta){
    console.log(contador);
    contador++;
}

/*
Y vamos a poner en práctica nuestro conocimiento con otra lista de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje.

Desafíos finales:

Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección "Opinión de la persona instructora".
*/

/*
En lugar de preocuparte por memorizar cada detalle, concéntrate en desarrollar habilidades de resolución de problemas, comprender los principios de diseño de software y aprender a investigar de manera eficiente en la documentación. La capacidad de leer e interpretar
la documentación es una habilidad valiosa, ya que te permite aprender nuevos lenguajes y tecnologías de manera efectiva, adaptándote rápidamente a los cambios en el panorama de desarrollo. Por lo tanto, en tu viaje como desarrollador, recuerda que la habilidad de comprender
y usar la documentación es tan importante como saber escribir código.
*/