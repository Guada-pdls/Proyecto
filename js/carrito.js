const main = document.querySelector("main")
Carrito()

let botones = document.querySelectorAll(".btn");

(localStorage.getItem("darkmode") === "true") ? activarModoOscuro() : desactivarModoOscuro()

function eliminarProductos(boton) {
    for (let producto of carrito) {
        if (producto.id === parseInt(boton.id)){
            const indice = carrito.findIndex(elemnt => elemnt.id === producto.id)
            eliminarDelCarrito(indice)
            if (main.hasChildNodes()){
                while (main.childNodes.length >= 1){
                    main.removeChild(main.firstChild)
                }
            }
            Carrito();
            (localStorage.getItem("darkmode") === "true") ? activarModoOscuro() : desactivarModoOscuro()
        }
    }
}

const botonesCarrito = () => {
    for (let boton of botones) {
        boton.addEventListener("click", (e)=>{
            eliminarProductos(boton)
        })
    }
}

botonesCarrito()