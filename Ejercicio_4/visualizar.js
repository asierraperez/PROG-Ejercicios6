function visualizar(matriz, par, impar) {
    var tabla=""
    var tabla_par=""
    var tabla_impar=""
    for (let i = 0; i < matriz.length; i++) {
        if (i == 0) {
            tabla = matriz[i] + tabla
        } else {
            tabla = matriz[i] + " ," + tabla
        }
    }
    for (let j = 0; j < par.length; j++) {
        if (j == 0) {
            tabla_par = par[j] + tabla_par
        } else {
            tabla_par = par[j] + " ," + tabla_par
        }
    }
    for (let k = 0; k < array.length; k++) {

        if (k == 0) {
            tabla_impar = impar[k] + tabla_impar
        } else {
            tabla_impar = impar[k] + " ," + tabla_impar
        }
    }
    alert("Matriz: "+tabla+"\nNumeros pares: "+tabla_par+"\nnumeros impares: "+tabla_impar)



}


