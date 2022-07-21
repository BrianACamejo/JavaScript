let nombreProductoA = "Remera"
let precioProductoA = 2500
let stockProductoA =20

let nombreProductoB = "Pantalon"
let precioProductoB = 3900
let stockProductoB = 20


let nombreProductoC = "Zapatillas"
let precioProductoC = 25000
let stockProductoC  = 20

let cantidadCompras = prompt("Ingrese la catidad de productos distintos que quiere comprar: \n-Remera\n-Pantalon\n-Zapatillas ")
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio}

function calculoStock(cantidad, stock, precio){
        if(stock >= cantidad){
            calculoPrecio(cantidad, precio)
        alert("El precio total es de: $" + (cantidad * precio))
        }
        else{
            alert("No disponemos esa cantidad de stock. Nuestro stock actual es de: " + stockProductoA + " unidades")
        }
    }


for(let i = 0; i < cantidadCompras; i++ ){

let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n-Remera\n-Pantalon\n-Zapatillas ")
let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar: ")

if(compra1 == "Remera"){
    calculoStock(cantidad1, stockProductoA, precioProductoA)}
   

if(compra1 == "Pantalon"){
    calculoStock(cantidad1, stockProductoB, precioProductoB)}
   

if(compra1 == "Zapatillas"){
    calculoStock(cantidad1, stockProductoC, precioProductoC)} 
}

switch(true){
    case precioTotal < 5000 || precioTotal > 1000000:
        precioTotal = precioTotal * 0.95
       alert("Recibiste un descuento del 5% por tu compra")
    break;
    case precioTotal < 10000:
        precioTotal = precioTotal * 0.90
        alert("Recibiste un descuento del 10% por tu compra")
        break;
    case precioTotal < 30000:
        precioTotal = precioTotal * 0.80
        alert("Recibiste un descuento del 20% por tu compra")
        break;
    case precioTotal > 50000: 
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
