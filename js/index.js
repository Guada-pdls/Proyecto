const darkmode = document.querySelector("#darkmode")
const body = document.querySelector("body")
let estado = 0;

(localStorage.getItem("darkmode") === "true") ? activarModoOscuro() : desactivarModoOscuro()

darkmode.addEventListener("click", (e)=>{
    darkmode.classList.toggle("btn-light");
    (estado === 0) ? (activarModoOscuro(),
    estado = 1) : (desactivarModoOscuro(),
    estado = 0)
    if (body.classList.contains("modo-oscuro")){
        localStorage.setItem("darkmode", true)
    } else {
        localStorage.setItem("darkmode", false)
    }
})

