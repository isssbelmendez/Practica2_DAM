/*let suma = 34 + 67; //declaracion e inicializacion de variable 

let resultado; //declarion de variable

resultado = 20 + 30 *2; //iniciar una variable

console.log(resultado)

console.log(suma)*/

/*let textJavascript = prompt("Escriba 'javascript'")

if (textJavascript === "javascript") {
    console.log("Lo escribiste bien")
} else {
    console.log("Lo escribiste mal")
}*/

/*let numUsuario = prompt("Ingrese numero del 1 al 10")

console.log(numUsuario + " Es: " + typeof numUsuario)
console.log(parseInt(numUsuario))

if (parseInt(numUsuario) <= 10) {
    // Sentencia true
    console.log("Numero dentro del rango 1 a 10")
} else {
    // Sentencia false
    console.log("Numero fuera de rango")
}*/

//condicion ? exprVerdadero : exprFalso
/*const edad = 6
const bebida = edad >= 21 ? "Cerveza 🍺 " : "Juice 🧃"
console.log(bebida)

function getCobro(esVIP) {
  return (esVIP ? '$2.00' : '$10.00')
}

console.log(getCobro(true))
console.log(getCobro(false))
console.log(getCobro(null))*/


//Switch
/*La declaración **switch** evalúa una expresión, 
comparando el valor de esa expresión con una instancia **case**, 
y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.*/

/*let fruta = prompt("Escriba una fruta")

switch (fruta) {
  case 'Naranjas':
    console.log('El kilogramo de naranjas cuesta $0.59.')
    break
  case 'Manzanas':
    console.log('El kilogramo de manzanas cuesta $0.32.')
    break
  case 'Platanos':
    console.log('El kilogramo de platanos cuesta $0.48.')
    break;
  case 'Cerezas':
    console.log('El kilogramo de cerezas cuesta $3.00.')
    break
  case 'Mangos':
  case 'Papayas':
    console.log('El kilogramo de mangos y papayas cuesta $2.79.')
    break
  default:
    console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.')
}*/

//while
/*Crea un bucle que ejecuta una sentencia especificada mientras 
cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.*/
/*let numero = 0
while (numero <= 10) {
    console.log(numero)
    numero++ //numero = numero + 1;
}
console.log("FIN: " + numero)*/


//do… while
/*La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, 
dando como resultado que la sentencia especificada se ejecute al menos una vez.*/
/*let resultado = ''
let i = 0

do {
  i = i + 1
  resultado = resultado + i
} while (i < 5)

console.log(result)*/

//for
/*Crea un bucle que consiste en tres expresiones opcionales, 
encerradas en paréntesis y separadas por puntos y comas,
 seguidas de una sentencia ejecutada en un bucle.*/
 /*for (let i = 0; i < 5; i++) {
    console.log("El numero es " + i)
  }*/


  //Array
  /*Los arrays son objetos similares a una lista cuyo prototipo 
  proporciona métodos para efectuar operaciones de recorrido y de mutación. 
  Tanto la longitud como el tipo de los elementos de un array son variables.*/

/*let frutas = ["manzana", "platano", "pera"]
console.log(frutas)
console.log(frutas.length)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])

console.log(typeof frutas)

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}*/

//for of
/*La sentencia for…of ejecuta un bloque de código 
para cada elemento de un objeto iterable, como lo 
son: String, Array, objetos similares a array (por ejemplo, 
    arguments or NodeList), TypedArray, Map, Set e iterables definidos por el usuario.*/
    /*for (let fruta of frutas) {
        console.log(fruta);
    }*/

    //for in
/*El bucle for…in iterará sobre todas las propiedades de un objeto. Más tecnicamente, iterará sobre cualquier propiedad en el objeto que haya 
sido internamente definida con su propiedad [[Enumerable]] configurada como true.*/
/*for (let fruta in frutas) {
    console.log(fruta);
}*/


//Funciones con argumentos/parámetros:
/*function saludar(nombreUsuario) {
    console.log("Bienvenido! " + nombreUsuario);
}
saludar("Ignacio");*/

//Funciones con retorno:
/*function saludar(nombreUsuario) {
    return "Bienvenido " + nombreUsuario;
}

console.log(saludar("Ignacio"));*/

//Ejemplo sumar:
/*function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

let numeroUno = prompt("Ingrese primer número");
let numeroDos = prompt("Ingrese segundo número");

let resultado = sumar(numeroUno, numeroDos);

console.log("El total es: " + resultado);*/

//Reutilizables
/*Una característica fundamental de las funciones es que se pueden reutilizar.*/
/*function sumar(n1, n2) {
    return n1 + n2;
}

let resultadoUno = sumar(10, 20);
let resultadoDos = sumar(50, 60);
let resultadoTres = sumar(100, 30);

console.log("El total uno es: " + resultadoUno);
console.log("El total dos es: " + resultadoDos);
console.log("El total tres es: " + resultadoTres);*/



