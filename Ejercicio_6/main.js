function main() {
    var perfil=declarar_perfil()
    //var user = new perfil();
    array_user=iniciar_perfiles(perfil)
    var menu_op;
    var menu_datos;
    var datos = ["Numero de perfil","Nombre ", "Apellidos ", "Direccion ", "Telefono ", "Email"]
    var usuario = []
    var tabla = ""
    var confirmar_datos, confirmar_op = false
    entrada(array_user, datos)
    /*do {
        menu_op = prompt("¿Que quieres hacer?\n1.-Crear perfil\n2.-Borrar perfil\n3.-Modificar datos\n4.-Mostrar un perfil\n5.-Mostrar todo\n6.-Salir")
        menu_op = parseInt(menu_op)
        switch (menu_op) {
            case 1:
                entrada(array_user,datos)
                //visualizar(user, datos, usuario, tabla)
                break;
            case 2:
                do {
                    menu_datos = prompt("Selecciona el dato a cambiar\n1.-Nombre\n2.-Apellidos\n3.-Direccion\n4.-Teléfono\n5.-Email")
                    menu_datos = parseInt(menu_datos)
                    cambio_datos(menu_datos, user)
                    confirmar_datos = confirmar()
                } while (confirmar_datos == false);
                break;
            default:
                console.log("en default menu_op")
                alert("Error,\nDato introducido no valido, intentalo de nuevo")
                break;
        }
        confirmar_op = confirmar()
    } while (confirmar_op == false);
*/}

main()