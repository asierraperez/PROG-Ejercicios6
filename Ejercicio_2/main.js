function main(){
    var repetir="y"
    while (repetir=="y") {
        var matriz=entradas()       
        visualizar(matriz)
        repetir=repetir_operacion()
    }  
}
main()