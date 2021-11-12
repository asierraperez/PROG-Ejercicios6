function calculo(matriz) {
    var aux_matriz = matriz

    // tabla_comp = ""
    // tabla_orig = ""
    /*for (let index = 0; index < matriz.length; index++) {
        if (index > 0) {
            tabla_orig = matriz[index] + ", " + tabla_orig
        } else {
            tabla_orig = matriz[index]
        }
    }*/
    //Con esta funcion ordeno automaticamente la matriz
    aux_matriz.sort((a, b) => a - b)
    /*for (let index = 0; index < matriz.length; index++) {
        if (index > 0) {
            tabla_comp = matriz[index] + " > " + tabla_comp
        } else {
            tabla_comp = matriz[index]
        }
    }
    alert("Datos:\n" + tabla_orig + "\nOrdenados de mayor a menor:\n" + tabla_comp)
*/
    return aux_matriz
}