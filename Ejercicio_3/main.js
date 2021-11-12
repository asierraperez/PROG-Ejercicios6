function main() {
    var matriz=entradas()
    var tabla_comp="",tabla_orig=""
    tabla_orig=tabla_original(matriz)
    matriz=calculo(matriz)
    tabla_comp=tabla_comparada(matriz)
    salida(tabla_orig,tabla_comp)
    
}
main()