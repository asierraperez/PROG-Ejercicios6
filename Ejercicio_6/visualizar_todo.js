function visualizar_todo(array_user, perfil) {
    var aux_ver_todo_array = array_user
    var ver_todo_ind = new perfil()
    var aux_tabla = ""
    var tabla = ""

    //Primero agrego a 'tabla' los nombres de las variables dentro de cada perfil
    for (const id in ver_todo_ind) {
        tabla = tabla + id + " | "
        //como 'email' es la ultima, añado un salto de linea
        if (id == "email") {
            tabla = tabla + "\n"
        }
    }

    //ahora recorro la matriz para ir añadiendo cada perfil en una linea de la variable 'tabla'
    for (let i = 0; i < aux_ver_todo_array.length; i++) {
        ver_todo_ind = aux_ver_todo_array[i]
        if (ver_todo_ind.numero > 0) {
            for (var id in ver_todo_ind) {
                tabla = tabla + ver_todo_ind[id] + " | "
                if (id == "email") {
                    tabla = tabla + "\n"
                }
            }
            console.table(aux_tabla)
        }
    }

    alert(tabla)


}




