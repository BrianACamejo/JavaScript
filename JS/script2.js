let productoA = { nombre: "Remera", precio: 2500 , stock: 20 }

function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

const productoB = new Producto("Pantalon", 4000, 20)
const productoC = new Producto("Zapatillas", 25000, 20)
const productoD = new Producto("Medias", 1000, 20)
const productoE = new Producto("Gorra", 2300, 20)


let listaProductos = [ productoA, productoB, productoC, productoD, productoE]

let nombresProductos = [ ]

function listarProductos(){
    for(const producto of listaProductos){
    nombresProductos.push(producto.nombre)}
}
/* let productoB = { nombre: "Pantalon" , precio: 4000, stock: 20 } 
 */
/* let productoC = { nombre: "Zapatillas", precio: 25000 , stock: 20} */

let cantidadCompras = prompt("Ingrese la catidad de productos distintos que quiere comprar: \n " + listaProductos.join("\n "))
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio}

function calculoStock(cantidad, stock, precio){ 
        if(stock >= cantidad){
            calculoPrecio(cantidad, precio)
        alert("El precio total es de: $" + (cantidad * precio))
        }
        else{
            alert("No disponemos esa cantidad de stock. Nuestro stock actual es de: " + productoA.stock + " unidades")
        }
    }



for(let i = 0; i < cantidadCompras; i++ ){

let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n " + listaProductos.join("\n ")).toLocaleLowerCase()
let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar: ")

if(compra1 == "Remera"){
    calculoStock(cantidad1, productoA.stock, productoA.precio)}
   

if(compra1 == "Pantalon"){
    calculoStock(cantidad1, productoB.stock, productoB.precio)}
   

if(compra1 == "Zapatillas"){
    calculoStock(cantidad1, productoC.stock, productoC.precio)} 
}

switch(true){
    case precioTotal < 5000 || precioTotal > 1000000:
        precioTotal = precioTotal * 0.95
       alert("Recibiste un descuento del 5% por tu compra")
    break;
    case precioTotal < 20000:
        precioTotal = precioTotal * 0.85
        alert("Recibiste un descuento del 15% por tu compra")
        break;
    case precioTotal < 50000:
        precioTotal = precioTotal * 0.75
        alert("Recibiste un descuento del 25% por tu compra")
        break;
    case precioTotal > 100000: 
        precioTotal = precioTotal * 0.60
        alert("Recibiste un descuento del 40% por tu compra")
        break;
    default:
        console.log(precioTotal)
        alert("No ingresaste un precio en numeros");
        break;
}

function sumaIva(precio){
    return precio * 1.21 
}    

let precioTotalConImpuestos = sumaIva(precioTotal)
alert("El total con impuestos es de: $" + precioTotalConImpuestos)


 