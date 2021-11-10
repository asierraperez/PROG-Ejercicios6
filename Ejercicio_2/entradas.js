function entradas(){
    var filas=prompt("Inserte el numero de filas")
    var columnas=prompt("Inserta el numero de columnas")
    var min=prompt("Inserta valor minimo del rango")
    min=parseInt(min)
    var max=prompt("Inserta valor maximo del rango")
    max=parseInt(max)
    //var valor=1
    var matriz=[] 
    for (let i = 0; i < filas; i++) {
        matriz[i]=[]
        for (let j = 0; j < columnas; j++) {
            matriz[i][j]=Math.floor(Math.random() * (max - min)) + min
            //valor++                     
        }                               
    }
    console.table(matriz)

    
    return matriz
}