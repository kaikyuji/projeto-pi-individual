function pegarData(){
    var dataHoraAtual = new Date();

    var dia = dataHoraAtual.getDate();
    var mes = dataHoraAtual.getMonth() + 1; // Os meses vão de 0 a 11
    var ano = dataHoraAtual.getFullYear();

    var horas = dataHoraAtual.getHours();
    var minutos = dataHoraAtual.getMinutes();
    var segundos = dataHoraAtual.getSeconds();
    
    var dataHora = `${ano}/${mes}/${dia} ${horas}:${minutos}:${segundos}`

    return dataHora
}

function validarSessao(){
    if(sessionStorage.EMAIL_USUARIO == undefined || sessionStorage.NOME_USUARIO == undefined || sessionStorage.ID_USUARIO == undefined || sessionStorage.IDADE_USUARIO == undefined){
        alert('Você não está loggado!');
        window.location = '../../login.html'
    }
}
