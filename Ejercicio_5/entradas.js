function entradas(){
    var numeros=20
    var sumando_1=0
    var sumando_2=0
    var matriz=[] 
    for (let i = 0; i < numeros; i++) {       
        if (i<2) {
            matriz[i]=i
        } else {
            sumando_0=matriz[i-2] 
            sumando_1=matriz[i-1]
            matriz[i]=sumando_0+sumando_1    
        }                      
    }
    console.table(matriz)   
    return matriz
}