function tabla_original(matriz) {
    var aux_matriz=matriz
    var tabla_orig=""
    for (let index = 0; index < aux_matriz.length; index++) {
        if (index > 0) {
            tabla_orig = aux_matriz[index] + ", " + tabla_orig
        } else {
            tabla_orig = aux_matriz[index]
        }
    }
    return tabla_orig
}