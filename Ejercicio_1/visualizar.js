function visualizar(matriz) {
    var repetir = "y"
    while (repetir == "y") {
        var menu = prompt("Como quieres visualizar los datos?\n1.-Dato a dato\n2.-Eligiendo la posicion\n3.-Toda la matriz")
        menu = parseInt(menu)
        var fila, columna = 0
        tabla = ""
        switch (menu) {
            case 1:
                for (let i = 0; i < matriz.length; i++) {
                    for (let j = 0; j < matriz[i].length; j++) {
                        alert("Valor en posicion " + (i + 1) + ", " + (j + 1) + " = " + matriz[i][j])
                    }
                }
                repetir=repetir_operacion()
                break;
            case 2:
                fila=indicar_filacol(matriz,"fila")
                columna=indicar_filacol(matriz,"columna",fila)
                alert("Valor en " + fila + "," + columna + " = " + matriz[fila - 1][columna - 1])
                repetir=repetir_operacion()
                break;
            case 3:
                for (let i = 0; i < matriz.length; i++) {
                    for (let j = 0; j < matriz[i].length; j++) {
                        tabla = tabla + (matriz[i][j] + "  ")
                    }
                    tabla = tabla + "\n"
                }
                alert(tabla)
                repetir=repetir_operacion()
                break;
            default:
                alert("ERROR,\nInténtalo de nuevo")
                break;
        }
    }


}