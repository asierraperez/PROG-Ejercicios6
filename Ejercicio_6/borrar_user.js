function borrar_user(array_user, perfil) {

    var aux_borra_user = array_user
    var borrar_user_individual = new perfil()
    var usuario_vacio = new perfil()
    var errores = 0
    var seleccion_user = prompt("Indica numero de perfil a borrar (1 a 5) o nombre del usuario")

    //Primero recorro la matriz de perfiles
    for (let index = 0; index < aux_borra_user.length; index++) {
        //Igualo cada perfil a un auxiliar para poder trabajar con ese perfil
        borrar_user_individual = aux_borra_user[index]
        //si el nombre o el numero coincide con lo que indico el usuario:
        if ((borrar_user_individual.numero == seleccion_user) | (borrar_user_individual.nombre == seleccion_user)) {
            //Igualo el individual con un perfil vacio para borrarlo
            for (var id in borrar_user_individual) {
                borrar_user_individual[id] = usuario_vacio[id]
            }
            //y lo transfiero a la matriz de perfiles principal
            aux_borra_user[index] = borrar_user_individual
            break
            //Si no; sumo un error    
        } else {
            errores++
        }
    }
    //Si los errores son iguales a la longuitud de la matriz, el perfil no existe
    if (errores == aux_borra_user.length) {
        alert("ERROR, usuario inexistente")
    }
    return aux_borra_user

}