var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL NA FUNCAO LISTAR! ESTAREI BUSCANDO TODAS AS POSTAGENS E SEUS RESPECTIVOS AUTORES, DATA DE POSTAGEM E TAMBÉM TEMPO.");
    var instrucao = `select post.id, post.titulo, post.conteudo, post.dataPost, usuario.username from post join usuario on post.fkUser = usuario.id order by post.id desc;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", usuario)
    var instrucao = `
        SELECT id, username, email, senha, DATE_FORMAT(FROM_DAYS(DATEDIFF(now(),nascimento)), '%Y')+0 as idade FROM usuario WHERE email = '${usuario.email}' AND senha = '${usuario.senha}';`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editarBio(usuarioBio){
    console.log('ACESSEI O USUARIO MODEL NA FUNCAO EDITARBIO! ESTAREI INSERINDO A NOVA BIOGRAFIA DO ID DO USUARIO LOGGADO')

    var instrucao = `update usuario set bio = '${usuarioBio.textoBio}' where id = ${usuarioBio.fkUser};`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function publicarNovo(postagem){
    console.log('ACESSEI O USUARIO MODEL, NA FUNCAO PUBLICAR NOVO')
    var instrucao = `insert into post values (null, '${postagem.titulo}', '${postagem.conteudo}', '${postagem.dataHora}', ${postagem.fkUser})`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function buscarPost(idPost){
    console.log('ACESSEI O USUARIO MODEL, NA FUNCAO BUSCAR POSTS! ESTAREI BUCANDO OS DADOS DO ID DA POSTAGEM ESPECIFICADA!')
    var instrucao = `select * from post where post.id = ${idPost}`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function buscarInformacoes(idUsuario){
    console.log('ACESSEI O USUARIO MODEL NA FUNCAO BUSCAR INFORMACOES!. ESTAREI BUSCANDO DADOS VINDOS DO ID DO USUÁRIO LOGGADO!')
    // selecionando a BIOGRAFIA do usuário e a quantidade de posts
    var instrucao = `select count(post.id) as qtyPosts, usuario.bio from usuario join post on post.fkUser = usuario.id where post.fkuser = ${idUsuario} group by usuario.bio`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (username, email, senha, nascimento) VALUES ('${usuario.username}', '${usuario.email}', '${usuario.senha}', '${usuario.nascimento}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    publicarNovo,
    buscarInformacoes,
    buscarPost,
    editarBio
};