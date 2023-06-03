var database = require("../database/config")

function puxarRecorde(userid){
    var instrucao = `select pontos as recordeAtual from recorde where fkUsuario = ${userid}`
    return database.executar(instrucao)
} 

function cadastrarRecorde(usuario, recorde){
    var instrucao = `update recorde set pontos = ${recorde}, dtRecorde = current_date where fkUsuario = ${usuario}`
    console.log('Executando a instrucao:' + instrucao)
    return database.executar(instrucao)
}
module.exports = {
    puxarRecorde,
    cadastrarRecorde
}