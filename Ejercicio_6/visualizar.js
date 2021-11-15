function visualizar(array_user, perfil) {

    var aux_ver_array_ind = array_user
    var ver_user_individual = new perfil()
    var tabla = ""
    var errores = 0
    var ver_perfil = prompt("Indica numero de perfil a modificar(1 a 5) o nombre del usuario")

    //Recorro la matriz buscando el usuario
    for (let i = 0; i < aux_ver_array_ind.length; i++) {
        ver_user_individual = aux_ver_array_ind[i]
        if ((ver_user_individual.numero == ver_perfil) | (ver_user_individual.nombre == ver_perfil)) {
            //en cuanto lo encuentre, añado los nombres y los valores a 'tabla'
            for (var id in ver_user_individual) {
                tabla = tabla + (id + " : " + ver_user_individual[id] + "\n")
            }
        } else {
            errores++
        }
    }

    if (errores == aux_ver_array_ind.length) {
        alert("ERROR, usuario inexistente")
    } else {
        alert(tabla)
    }
}