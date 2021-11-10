function repetir_operacion() {
    do {
        var confirmar = prompt("Quieres hacer alguna otra operacion?(Y/N)")
        confirmar.toLowerCase(confirmar)
        if ((confirmar != "y") & (confirmar != "n")) {
            alert("ERROR,\nValor no reconociodo, vuelve a intentarlo")
        }
    } while ((confirmar != "y") & (confirmar != "n"));
    console.log(confirmar)
    return confirmar

}