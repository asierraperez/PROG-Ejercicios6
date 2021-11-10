function confirmar(){
    do {
        var confirmar=prompt("¿Quieres hacer alguna otra operacion?(Y/N)")
    } while ((confirmar!="y")&(confirmar!="n"));
   
    if (confirmar=="y") {
        return false
    } else {
        return true
    }
}