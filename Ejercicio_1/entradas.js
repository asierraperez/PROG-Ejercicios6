function entradas(){
    var filas=prompt("Inserte el numero de filas")
    var columnas=prompt("Inserta el numero de columnas")
    //var valor=1
    var matriz=[] 
    for (let i = 0; i < filas; i++) {
        matriz[i]=[]
        for (let j = 0; j < columnas; j++) {
            matriz[i][j]=prompt("Inserta el valor de la posicion "+(i+1)+","+(j+1))//valor
            //valor++                     
        }                               
    }
    console.table(matriz)

    
    return matriz
}