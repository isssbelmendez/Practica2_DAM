//Plantillas literales
/*Las plantillas literales son cadenas literales que habilitan 
el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de 
caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.

En ediciones anteriores de la especificación ES2015, solían llamarse “plantillas de cadenas de caracteres”.*/

/*console.log('línea 1 de cadena de texto\n' +
'línea 2 de cadena de texto');

console.log(`línea 1 de la cadena de texto
línea 2 de la cadena de texto`);*/


//Interpolación de expresiones
/*Para insertar expresiones dentro de cadenas de caracteres normales, se utilizaría la siguiente sintaxis:*/
/*let nombreUsuario = "James";
console.log("\nBienvenido: \n" + nombreUsuario);*/

/*Ahora, con las plantillas literales, se pueden utilizar 
sus nuevas capacidades (es decir, insertar expresiones con ${ } 
e incluir caracteres de fin de linea literales dentro de la cadena) para simplificar la sintaxis: */
/*let nombreUsuario = "James";
console.log('\nBienvenido: \n' + nombreUsuario); 

let nombreUsuario2 = "Keiry";
console.log(`Bienvenido:
${nombreUsuario2}
`);

//operaciones matematicas
let a = 23;
let b = 55;
console.log(`Resultado de a + b: ${ a + b }`)

//uso de metodos
console.log(`Bienvenido: ${ nombreUsuario.toUpperCase() }`)

// ternario
let nombreUsuario3 = "james"
let estado = false
console.log(`${ estado ? 'online!' : 'offline' } ${ nombreUsuario }`);*/

//var vs let vs const
//var
/*Uno de los mayores problemas al declarar variables con var,
 es que puede sobrescribir las declaraciones de variables sin errores.*/
 /*var estado = true;
var estado = false;
console.log(estado);*/

/*let nombreUsuario = "Isabel";
console.log(`Bienvenido: ${nombreUsuario.toLowerCase}`)*/


/*let
Debido a que este comportamiento no arroja un error, la búsqueda 
y corrección de errores se vuelve más difícil. Se introdujo let una
 nueva palabra clave llamada en ES6 para resolver este problema potencial con var. 

Con let: Una variable con el mismo nombre solo se puede declarar una vez. */
/*let estado = true;
let estado = false;
console.log(estado);*/

/*let estado = true;
estado = false;
console.log(estado);*/

/*Scope
En simples palabras el “scope de una variable” 
hace referencia al lugar donde esta va a residir o donde podrá ser accesible. Cuando declaras una variable con var, 
se declara globalmente o localmente si se declara dentro de una función. */
/*var estado = true
if (estado) {
    var estado = false
}
console.log(estado)*/

/*var n1 = 40;
var n2 = 55;

function sumar(n1,n2){
    return n1 + n2;
}

let resultado = sumar(10 , 20);
console.log("El total uno es: " + resultado);

console.log(n1);
console.log(n2);*/

/*const
const tiene todas las características de let, 
con la ventaja adicional de que las variables declaradas 
usando const son de solo lectura. Son un valor constante, lo que significa que 
una vez que se asigna una variable const, no se puede reasignar. */

//error
for (let i = 0; i < 10; i++) {
    console.log(i)
}

//valido
/*const estado = true
if (estado) {
    const estado = false
    console.log(estado)
}
console.log(estado)*/