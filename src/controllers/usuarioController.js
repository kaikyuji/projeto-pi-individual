var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    console.log('ACESSEI O CONTROLLER USUARIO, ESTOU NA FUNCAO LISTAR!')
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarInformacoes(req, res){
    console.log('ACESSEI O CONTROLLER USUARIO, ESTOU NA FUNCAO BUSCARINFORMACOES!')
    var idUsuario = req.params.idUsuario;

    usuarioModel.buscarInformacoes(idUsuario)
    .then(function(resultado){
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage)
    })
}

function buscarPost(req, res){
    var idPost = req.params.idPost;
    usuarioModel.buscarPost(idPost)
    .then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado)
        }else{
            res.status(204).send('Nenhum resultado encontrado!')
        }
    }).catch(function(erro){
        console.log(erro);
        console.log('Houve um erro ao buscar as últimas medidas.', erro.sqlMessage);
        res.status(500).json(erro.sqlMessage)
    })
}

function publicarNovo(req, res){
    var postagem = req.body.postagemJSON;
    for(let values of Object.keys(postagem)){
        if(postagem[values] == undefined){
            res.status(400).send(`Seu ${values} está undefined `)
            return false
        }
    }

    usuarioModel.publicarNovo(postagem)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function editarBio(req, res){
    console.log('ACESSEI O CONTROLLER USUARIO, ESTOU NA FUNCAO EDITAR BIO!')
    var usuarioBio = req.body.biografiaJSON;
    // Faça as validações dos valores
    for(let values of Object.keys(usuarioBio)){
        if(usuarioBio[values] == undefined){
            res.status(400).send(`Seu ${values} está undefined `)
            return false
        }
    }   

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.editarBio(usuarioBio)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var usuario = req.body.cadastroJSON;

    // Faça as validações dos valores
    for(let values of Object.keys(usuario)){
        if(usuario[values] == undefined){
            res.status(400).send(`Seu ${values} está undefined `)
            return false
        }
    }   

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar(usuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var usuario = req.body.loginJSON;

    if (usuario.email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (usuario.senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(usuario)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    buscarInformacoes,
    buscarPost,
    editarBio,
    publicarNovo
}