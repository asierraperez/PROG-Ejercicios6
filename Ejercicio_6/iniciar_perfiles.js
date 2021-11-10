function iniciar_perfiles(perfil){
    array_user=[]
    for (let index = 0; index < 5; index++) {
        array_user[index]=new perfil()        
    }
    return array_user
}