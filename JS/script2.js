
function Producto(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    
    this.sumaIva = function(){
        return this.precio * 1.21 
    }
    this.sumarStock = function (cantidad){ this.stock += cantidad}  
}


const productoA = new Producto("Remera", 2500, 20)
const productoB = new Producto("Pantalon", 4000, 20)
const productoC = new Producto("Zapatillas", 25000, 20)
const productoD = new Producto("Medias", 1000, 20)
const productoE = new Producto("Gorra", 2300, 20)

let listaProductos = [productoA, productoB, productoC, productoD, productoE]


let cantidadCompras = prompt("Ingrese la catidad de productos distintos que quiere comprar: ")
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio}
 
function calculoStock(cantidad, producto){ 
        if(producto.stock >= cantidad){
            calculoPrecio(cantidad, producto.precio)
        alert("El precio total es de: $" + (cantidad * producto.precio))
        }
        else{
            alert("No disponemos esa cantidad de stock. Nuestro stock actual es de: " + stock + " unidades")
        }
    }

let nombresProductos = []
function listarProductos() {
    for(const producto of listaProductos){
        nombresProductos.push (producto.nombre)
    }
}
listarProductos()



for(let i = 0; i < cantidadCompras; i++ ){

let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n "+ nombresProductos.join("\n ")).toLowerCase()
let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar: ")

if(compra1 == productoA.nombre.toLowerCase()){
    calculoStock(cantidad1, productoA)}
   

else if(compra1 == productoB.nombre.toLowerCase()){
    calculoStock(cantidad1, productoB)}

else if(compra1 == productoC.nombre.toLowerCase()){
    calculoStock(cantidad1, productoC)} 

else if(compra1 == productoD.nombre.toLowerCase()){
    calculoStock(cantidad1, productoD)} 

else if(compra1 == productoE.nombre.toLowerCase()){
    calculoStock(cantidad1, productoE)}     

else {
    alert( "No tenemos ese producto")}
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

let precioTotalConImpuestos = sumaIva(precioTotal)
alert("El total con impuestos es de: $" + precioTotalConImpuestos)


 