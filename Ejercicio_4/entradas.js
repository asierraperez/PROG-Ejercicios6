function entradas(){
    var filas=10

    var matriz=[] 
    for (let i = 0; i < filas; i++) {
        
            matriz[i]=Math.floor(Math.random() * (100 - 1)) + 1
                                      
    }
    console.table(matriz)   
    return matriz
}