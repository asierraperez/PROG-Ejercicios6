function entrada(array_user,datos) {
    for (let index = 0; index < array_user.length; index++) {
        for (const property in array_user[index]) {
            console.log(datos[index])
        }       
    }
   
    /*user.nombre = prompt("Introduce tu nombre")
    //user.nombre ="alvaro"
    usuario[0] = user.nombre
    user.apellidos = prompt("Introduce tu apellidos")
    //user.apellidos ="Sierra"
    usuario[1] = user.apellidos
    user.direccion = prompt("Introduce tu direccion")
    //user.direccion ="Calle falsa"
    usuario[2] = user.direccion
    user.tlfno = prompt("Introduce tu numero de telefono")
    //user.tlfno ="123456"
    usuario[3] = user.tlfno
    user.email = prompt("Introduce tu direccion de email")
    //user.email ="a@jiop.es"
    usuario[4] = user.email
    console.table(user)*/
}