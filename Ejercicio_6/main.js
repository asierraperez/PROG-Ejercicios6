function main() {
    var perfil = declarar_perfil()
    var n_perfil = 0
    var array_user = iniciar_perfiles(perfil)
    var menu_op = 0;
    confirmar_op = false

    do {
        var repetir = false
        menu_op = prompt("¿Que quieres hacer?\n1.-Crear perfil\n2.-Borrar perfil\n3.-Modificar datos\n4.-Mostrar un perfil\n5.-Mostrar todo\n6.-Salir")

        menu_op = parseInt(menu_op)
        switch (menu_op) {
            case 1:
                while (repetir == false) {

                    if (n_perfil > 4) {
                        alert("ERROR,\nNo se pueden declarar mas perfiles\nBorra uno para declarar uno nuevo")
                        break;
                    } else {
                        array_user = entrada(array_user, perfil, n_perfil)
                        n_perfil = control_cuentas(n_perfil, "sumar")

                        if (n_perfil <= 4) {
                            repetir = confirmar("declarar otro perfil")
                        } else {
                            repetir = true
                        }

                    }
                }
                console.table(array_user)
                break;

            case 2:
                while (repetir == false) {
                    if (n_perfil <= 0) {
                        alert("ERROR,\nno existe ninguna cuenta")
                        break;
                    } else {
                        array_user = borrar_user(array_user, perfil)

                        n_perfil = control_cuentas(n_perfil, "restar")
                        if (n_perfil > 0) {
                            repetir = confirmar("borrar otro perfil")
                        } else {
                            repetir = true
                        }
                    }
                }
                console.table(array_user)
                break;

            case 3:
                while (repetir == false) {
                    if (n_perfil <= 0) {
                        alert("ERROR,\nno existe ninguna cuenta")
                        break;
                    } else {
                        array_user = cambio_datos(array_user, perfil)
                        repetir = confirmar("modificar otro perfil")
                    }
                }
                console.table(array_user)
                break;

            case 4:
                while (repetir == false) {
                    if (n_perfil <= 0) {
                        alert("ERROR,\nno existe ninguna cuenta")
                        break;
                    } else {
                        visualizar(array_user, perfil)
                        repetir = confirmar("ver otro perfil")
                    }
                }
                break;

            case 5:
                if (n_perfil <= 0) {
                    alert("ERROR,\nno existe ninguna cuenta")
                    break;
                } else {

                    visualizar_todo(array_user, perfil)
                }
                break;

            case 6:
                confirmar_op = confirmar("realizar otra operacion")
                break;
        }
    } while (confirmar_op == false);
}

main()