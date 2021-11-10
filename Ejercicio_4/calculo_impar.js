function calculo_impar(matriz) {
    var impar = []
    var auxiliar
    for (let i = 0; i < matriz.length; i++) {
        auxiliar = matriz[i] % 2
        if (auxiliar == 1) {
            impar[k] = matriz[i]
            impar[k] = parseInt(impar[k])
            k++
        }
    }
    return impar
}
