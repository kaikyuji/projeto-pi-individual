function pegarData(){
    var dataHoraAtual = new Date();

    var dia = dataHoraAtual.getDate();
    var mes = dataHoraAtual.getMonth() + 1; // Os meses vão de 0 a 11
    var ano = dataHoraAtual.getFullYear();

    var horas = dataHoraAtual.getHours();
    var minutos = dataHoraAtual.getMinutes();
    var segundos = dataHoraAtual.getSeconds();
    
    var dataHora = `${ano}/${mes}/${dia} ${horas}:${minutos}:${segundos}`
    console.log(dataHora)

    return dataHora
}
function validarSessao(){
    if(sessionStorage.EMAIL_USUARIO == `` || sessionStorage.NOME_USUARIO == `` || sessionStorage.ID_USUARIO == `` || sessionStorage.IDADE_USUARIO == ``){
        alert('Você não está loggado!');
        window.location = '../../login.html'
    }
}
