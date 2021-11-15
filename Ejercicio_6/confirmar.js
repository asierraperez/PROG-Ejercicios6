function confirmar(nombre) {

    do {
        var confirmar = prompt("¿Quieres " + nombre + " ?(Y/N)")
    } while ((confirmar != "y") & (confirmar != "n"));

    if (confirmar == "y") {
        return false
    } else {
        return true
    }

}