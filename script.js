function convertir(cantidadTicket, categoriaDescuento) {
    let totalPayment = 0
    
    switch (categoriaDescuento) {
        case "estudiante": {
            totalPayment = 200 * cantidadTicket * 0.2;
            break;
        }
        case "trainee": {
            totalPayment = 200 * cantidadTicket * 0.5;
            break;
        }
        case "junior": {
            totalPayment = 200 * cantidadTicket * 0.85;
            break;
        }
    }    
    return totalPayment
}

let formulario = document.getElementById("form_conversor")

let divResultado = document.getElementById("resultado")

let cantidad = document.getElementById("cantidad")

let categoria = document.getElementById("categoria")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault() //quitamos comportamiento por defecto
    divResultado.textContent = "Total de la compra $" + convertir(cantidad.value , categoria.value)
})

formulario.addEventListener("reset", ()=> {
    divResultado.textContent = ""
})