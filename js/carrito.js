const main = document.querySelector("main")
Carrito()

const botones = document.querySelectorAll(".btn")

if (localStorage.darkmode === "true") {
    ModoOscuro()
} 

botones.forEach( boton => {
    boton.addEventListener("click", (e)=>{
        for (let producto of carrito) {
            if (producto.id === parseInt(boton.id)){
                carrito = carrito.filter(producto => producto.id !== parseInt(boton.id))
                if (main.hasChildNodes()){
                    while (main.childNodes.length >= 1){
                        main.removeChild(main.firstChild)
                    }
                }
                Carrito()
                if (localStorage.darkmode === "true") {
                    ModoOscuro()
                } 
            }
        }
    })
})
