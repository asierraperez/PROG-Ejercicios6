function main() {
    var matriz = entradas()
    var repetir = "y"
    while (repetir == "y") {
        var menu = prompt("Elige una opcion\n1-.Visualizar datos\n2.-Insetar nuevos datos\n3.-Finalizar programa")
        menu = parseInt(menu)
        switch (menu) {
            case 1:
                visualizar(matriz)               
                break;
            case 2:
                sobreescribir(matriz)

                break;
            case 3:
                repetir = repetir_operacion()
                if (repetir=="n") {
                    alert("Finalizando programa")
                }
                
                break;
            default:
                alert("ERROR,\nInténtalo de nuevo")
                break;


        }
    }

}
main()