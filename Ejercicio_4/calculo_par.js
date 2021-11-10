function calculo_par(matriz) {   
    var par = []
    var auxiliar
    for (let i = 0; i < matriz.length; i++) {
        auxiliar = matriz[i] % 2
        if (auxiliar == 0) {
            par[j] = matriz[i]
            par[j] = parseInt(par[j])            
            j++ 
        }
    }
    return par
}