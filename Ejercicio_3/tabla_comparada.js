function tabla_comparada(matriz){
    var aux_matriz=matriz
    var tabla_comp=""
    for (let index = 0; index < aux_matriz.length; index++) {
        if (index > 0) {
            tabla_comp = aux_matriz[index] + " > " + tabla_comp
        } else {
            tabla_comp = aux_matriz[index]
        }
    }
    return tabla_comp
}