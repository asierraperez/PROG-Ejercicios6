function visualizar(matriz){
    var tabla=""
    for (let i = 0; i < matriz.length; i++) {
        if (i == 0) {
            tabla = tabla+matriz[i]
        } else {
            tabla = tabla + " ," + matriz[i] 
        }
    }
    alert("Los 20 primeros numeros de Fibonacci son:\n"+tabla)
}