function control_cuentas(n_perfil, mensaje) {

    var numero_cuentas = n_perfil

    //Si añado un perfil,
    if (mensaje == "sumar") {
        numero_cuentas++
        return numero_cuentas
    }

    //si borro un perfil
    if (mensaje == "restar") {

        numero_cuentas--
        return numero_cuentas

    }
}