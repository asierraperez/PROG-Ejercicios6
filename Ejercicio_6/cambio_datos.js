function cambio_datos(array_user, perfil) {

    var aux_cambio_datos = array_user
    var mod_user_individual = new perfil()
    var errores = 0
    var mod_perfil = prompt("Indica numero de perfil a modificar(1 a 5) o nombre del usuario")

    //primero recorro la matriz de perfiles
    for (let i = 0; i < aux_cambio_datos.length; i++) {
        //igual el perfil actual a un auxiliar
        mod_user_individual = aux_cambio_datos[i]
        //si nombre o el numero de perfil en el auxiliar es igual al introducido:
        if ((mod_user_individual.numero == mod_perfil) | (mod_user_individual.nombre == mod_perfil)) {
            //recorro los datos del objeto perfil para modificarlos
            for (const id in mod_user_individual) {
                //no me interesa cambiar el numero, ya que es el que me ayuda para indicar que en esta posicion hay un perfil
                if (id != "numero") {
                    var aux_mod_user = mod_user_individual[id]
                    mod_user_individual[id] = prompt("Nuevo " + id + "\nActual = " + mod_user_individual[id] + "\nPulsa 'y' para mantener el valor")
                    if (mod_user_individual[id] == "y") {
                        mod_user_individual[id] = aux_mod_user
                    }
                }

            }
            //vuelvo a igualar para transferir los valores nuevos al array principal
            aux_cambio_datos[i] = mod_user_individual
            //si no es igual, sumo un error 
        } else {
            errores++
        }
    }

    //si al recorrer la matriz no se encontro el perfil indicado,
    if (errores == aux_cambio_datos.length) {
        alert("ERROR, usuario inexistente")
    }

    return aux_cambio_datos
}