function sobreescribir(matriz) {
    var repetir = "y"
    while (repetir == "y") {
        menu = prompt("Que operacion quieres hacer\n1.-Sobreescribir un dato\n2.-Escribir una matriz nueva")
        menu = parseInt(menu)
        switch (menu) {
            case 1:
                fila=indicar_filacol(matriz,"fila")
                columna=indicar_filacol(matriz,"columna",fila)
                matriz[fila-1][columna-1] = prompt("Escribe el nuevo dato en la posicion " + fila + "," + columna + "\nValor actual = " + matriz[fila-1][columna-1])
                repetir = repetir_operacion()
                break;
            case 2:
                matriz=entradas()
                repetir= repetir_operacion()


                break;
            default:
                alert("ERROR,\nInténtalo de nuevo")
                break;
        }

    }


}