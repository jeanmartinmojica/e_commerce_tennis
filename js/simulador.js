// Algoritmo que calcula el precio total de una compra en la sección de raquetas, segun la marca de la raqueta, el numero de raquetas, incluyendo el IVA y un descuento del 5% por compras mayores a 600 USD.

let raqueta=prompt("Ingrese la marca de la raqueta");
let cantidad=parseInt(prompt("Ingrese la cantidad de raquetas"));
let precio=0;
let descuento=0;
const Iva=1.21;

switch (raqueta.toLowerCase()){
    case "wilson":
        precio=300;
        break
    case "babolat":
        precio=320;
        break
    case "head":
        precio=280;
        break
    case "yonex":
        precio=290;
        break
    default:
        console.warn("No existe esa raqueta")
}

function calcularIva(precio){
    let precioConIva=precio*cantidad*Iva;
    return precioConIva;
}
let conIva = calcularIva(precio);

if (conIva >= 600){
    descuento=conIva*0.95;
    console.log("El precio final es $"+descuento);
} else{
    console.log("El precio final es $"+conIva);
}