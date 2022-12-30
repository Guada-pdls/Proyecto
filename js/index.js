const darkmode = document.querySelector("#darkmode")
const body = document.querySelector("body")

darkmode.addEventListener("click", (e)=>{
    ModoOscuro()
    darkmode.classList.toggle("btn-light")
    if (body.classList.contains("modo-oscuro")){
        localStorage.setItem("darkmode", true)
    } else {
        localStorage.setItem("darkmode", false)
    }
})

if (localStorage.darkmode === "true") {
    ModoOscuro()
} 