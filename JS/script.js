//Primera clase

/* 
let nombre = prompt("Ingrese su nombre:")

let numero = prompt("Para seguir debes ser mayor de edad. Igrese su edad:")

console.log(numero)

alert("Bienvenido " + nombre) 
*/

//Segunda clase  if(condicion)(instrucciones)
    
/* 
let edad = parseInt(prompt("Ingrese su edad: "))
let nombre = prompt("Ingrese su nombre: ")

if(edad >= 18)(
    alert("Sos mayor de edad!") 
)

else(
     alert("No sos mayor de edad!")
)

if (nombre == "Brian")(
    alert("Bienvenido " + nombre )
)
*/

// Tercera clase, for (desde ; hasta ; actualizacion) 
/* for(let i = 0 ; i < 5 ; i = i + 1){ (el final puede ser de la suiguiente manera= 5 ; i+= 1 // 5 ; i++
    console.log(i)
    console.log("Bienvenido") 
} */

/* for(let i = 1 ; i <= 3 ; i++){
    if(i == 3 ){
        alert("Apurate, este es el ultimo turno!")
    }
let nombreIngresado   = prompt("Ingresar nombre");
alert("Bienvenido " + nombreIngresado + "." + "\nSu turno en la fila es el N: "+ i)
}

if((nombreIngresado !="Brian") && ((nombreIngresado == "brian") || (nombreIngresado =="BRIAN"))){
    alert("Hola Brian"); 
}else{
    alert("Error: Ingresar nombre valido");
}
 */

/* let precio = parseInt(prompt("Ingrese el precio:"))

   if (precio < 20) {
       alert ("El precio es menor que 20");
   }
   else if (precio < 50) {
       alert ("El precio es menor que 50");
   }
   else if (precio < 100) {
       alert ("El precio es menor que 100");
   }
   else if (precio > 100) {
       alert ("El precio es mayor que 100");
   }
   else {
       alert (" No ingresaste un precio en numeros");
   } 
 */

/* switch(precio){
    case 20:
       alert("El precio es menor que 20");
    break;
    case 50:
       alert("El precio es menor que 50");
    break;
    case 100:
        alert("El precio es menor que 100");
    break;
    case 100:
        alert("El precio es mayor que 100");
    break;
    default:
        console.log(precio)
        alert("No ingresaste un precio en numeros");
    break;
}

 */

/* Clase 4 -
ejemplos: 

function saludar() {
    console.log("Hola estudiantes!");
}
saludar()
saludar()
saludar()
*/

/* mensaje("Hola, bienvenido a las sumas")

function suma(num1, num2){
return  num1 + num2
   } 

function mensaje (resultado){
    console.log(resultado)
}

 */

/*suma(2, 6)
suma(8, 24)*/
/* 
let numeroA = parseInt(prompt("Ingresa el primer numero:"))
let numeroB = parseInt(prompt("Ingresa el segundo numero:"))


let numeroTotal = suma(numeroA, numeroB)
mensaje(numeroTotal /* numero */ 

// Clase 5  -   Objetos - Ejemplos:

/*
empleado: 
let nombre = "Homero";
let edad = 39;
let calle = "Av. siempreviva 742";


const personal = { nombre: "Homero", edad: 39, calle: "Av siempreviva 742" }
 
Se lo llama despues poniendo el nuevo nombre . y la palabra. ejemplo:

if(compra1 == "Remera"){
    calculoEmpleados(cantidad1, personal.nombre , personal.edad)}

O sino entre [] ejemplo:

if(compra1 == "Remera"){
    calculoEmpleados(cantidad1, personal["nombre"] , personal["edad"])}


    Constructores: (para agregar nuevo "personal")
ejemplo:

function Persona(nombre, edad, calle)
  this.nombre = nombre;
  this.edad = edad;
  this.calle = calle; 

const persona1 = new persona ("Homero", 39, "Av. Siempreviva 742")
const persona2 = new persona ("Marge", 36, "Av. Siempreviva 742")

//Metodos en objetos, por cada cadena de caracteres hay porpiedades disponibles en ella. Ejemplos:

let cadena = "HOLA CODER"

console.log(cadena.length) (te dice cuantos caracteres tiene "cadena")
console.log(cadena.toLowerCase) (pasa el texto a minuscula)
console.log(cadena.toUpperCase) (pasa el texto a mayuscula)

ejemplo : 

let usuario = "CaRamelOs"

let basededatoss = "Caramelos"

usuario == basededatos (FAIL)

usuario.toLowerCase() == basededatos.toLowerCase() (TRUE)

//Clase 6: ARRAYS

*/
//            0    1     2    3       4

/* let nombre = prompt("Ingrese su nombre: ")

let lista = [5, "Coder", 80, true, "House"]


// Join, te da todos los elementos pero separados por el valor que demos

console.log (lista.join ("* ") )

5* coder* 80* true* hause



// splice para borrar elementos    elemento, cuantos borrar
lista.splice(4, 1)
lista.splice(3, 3)

// push & unshift para agregar elementos
lista.push(nombre)
lista.unshift("Nuevo Elemento")

for(let i = 0; i < lista.length; i ++){
       console.log(lista[i])



// Metodo CONCAT, combinar dos arrays
const perros = ["Ciclon", "perri"]
const gatos = ["Mishi", "gato"]
const mascotas = perros.concat(gatos)

console.log(mascotas)

- ["Ciclon", "perri", "Mishi", "gato"]

// SLICE, devuelve una copia de un array dentro de un nuevo array, empezando de inicio a fin sin eliminar
const nombres = ["Rita" ,"Brian", "Jorge", "Aru", "Roxi"]

const masculinios = nombres.slice (1, 3);

- masculinos contiene ["Brian", "Jorge"]



// CLASE 7 : Funciones de orden superior 

function porCadaUno(arr, fn){
          for (const elemento of array){
          fn(ellemento)
          }
}
 

function suma (a, b){
    a+b
}

const numeros = (1, 2, 3, 4, 5, 6)

porCadaUno(numeros, suma)

function porCadaUno(numeros, console.log)
         for (const elenmento of numeros){
        console.log(elemento)
         }






} */


 




