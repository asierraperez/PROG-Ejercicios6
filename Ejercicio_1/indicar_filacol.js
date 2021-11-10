function indicar_filacol(matriz, nombre,matr_fila) {
    if (nombre == "fila") {
        do {
            var fila = prompt("Indica fila del dato")
            fila = parseInt(fila)
            if (fila > matriz.length) {
                alert("Error, valor de fila no valido")
            }
        } while (fila > (matriz.length));
        return fila
    } else if (nombre == "columna") {
        do {
            var columna = prompt("Indica columna del dato")
            columna = parseInt(columna)
            console.log(columna + "        " + matriz[matr_fila - 1].length)
            if (columna > matriz[matr_fila - 1].length) {
                alert("Error, valor de columna no valido")
            }
        } while (columna > (matriz[matr_fila - 1].length));
        return columna
    }


}