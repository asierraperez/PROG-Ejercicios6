function visualizar(matriz) {
    var tabla = ""
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            tabla = tabla + (matriz[i][j] + "  ")
        }
        tabla = tabla + "\n"
    }
    alert(tabla)





}