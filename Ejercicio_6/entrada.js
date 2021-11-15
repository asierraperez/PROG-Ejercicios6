function entrada(array_user, perfil, n_perfil) {
    var aux_crear_user = array_user
    var user_individual = new perfil()

    //primero recorro la matriz de objetos
    for (let i = 0; i <= aux_crear_user.length; i++) {
        //'numero' es el nombre de la primeroa variable. 
        //Si es =0, quiere decir que no hay ningun perfil en esa posición
        if (aux_crear_user[i].numero == 0) {
            //una vez encontrada una posicion libre le asigno valores
            for (const id in user_individual) {
                if (id == "numero") {
                    user_individual[id] = i + 1
                } else {
                    user_individual[id] = prompt("Introduce " + id + " de perfil " + (i + 1))
                }
            }
            aux_crear_user[i] = user_individual
            break
        }

    }

    return aux_crear_user
}