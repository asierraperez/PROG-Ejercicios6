function cambio_datos(menu_datos, user) {
    switch (menu_datos) {
        case 1:
            user.nombre = prompt("Introduce nuevo nombre")
            break;
        case 2:
            user.apellidos = prompt("Introduce nuevos apellidos")
            break;
        case 3:
            user.direccion = prompt("Introduce nueva dirrecion")
            break;
        case 4:
            user.tlfno = prompt("Introduce nuevo telefono")
            break;
        case 5:
            user.email = prompt("Introduce nuevo email")
            break;
        default:
            alert("Error,\nDato introducido no valido, intentalo de nuevo")
            break;
           
    }
    


}