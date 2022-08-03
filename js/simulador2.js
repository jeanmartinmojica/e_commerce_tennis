//Algoritmo que calcula el precio total de una compra, ingresando el número de articulos, la cantidad de items por articulo, y el precio del articulo.

let numArticulos=parseInt(prompt("Ingrese número de articulos a comprar"))
let precioTotal=0

for (let i = 0; i < numArticulos; i++) {
    let numItems=parseInt(prompt("Ingrese cantidad de items por articulo "))
    let precio=parseFloat(prompt("Ingrese el precio del articulo"))
    precioTotal=precioTotal+(numItems*precio)
}
console.log("El precio final es: "+precioTotal)