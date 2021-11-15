function iniciar_perfiles(perfil) {
    //inicializo la matriz y declaro las 5 posiciones como 'perfil'
    var array_user = []

    for (let index = 0; index < 5; index++) {
        array_user[index] = new perfil()
    }

    return array_user
}