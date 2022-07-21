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