"use strict"

// Descuento 10%

let arr = [];
const copia = arr.concat(productos);

const descuento10 = () => {
    copia.forEach(producto => {
        if (producto.oferta === true){
            producto.precio = producto.precio * 0.90
        }
    })
    return copia
}

console.log(descuento10());

// Ordenar productos

const ordenarAlfabeticamente = () => {
    copia.sort((a,b) => {
        if (a.nombre < b.nombre) return -1
        if (a.nombre > b.nombre) return 1
        return 0
    })
    return copia
}

console.log(ordenarAlfabeticamente())

// Filtro de ofertas

const filtrarOfertas = () => {
    const ofertas = productos.filter(producto => (producto.oferta === true))
    return ofertas;
}

const verOfertas = () => {
    if (confirm("¿Desea ver las ofertas?")) { console.table(filtrarOfertas()) }
}

verOfertas()

//buscar productos

const buscarProducto = () => {
    const productoABuscar = prompt("Ingrese un producto")
    let productosEncontrados = []
    for (const producto of productos) {
        if ((producto.nombre).includes(productoABuscar)){
            productosEncontrados.push(producto)
        }
    }
    return productosEncontrados
}

console.table(buscarProducto());