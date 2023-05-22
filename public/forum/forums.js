var usuario = document.querySelector('#usuario')

if(sessionStorage.EMAIL_USUARIO == undefined || sessionStorage.NOME_USUARIO == undefined || sessionStorage.ID_USUARIO == undefined){
    window.location = '../login.html'
}else{
    usuario.innerHTML = sessionStorage.NOME_USUARIO;
}