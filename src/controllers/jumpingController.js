var jumpingModel = require("../models/jumpingModel");

function puxarRecorde(req, res){
    var userid = req.params.userid
    jumpingModel.puxarRecorde(userid)
    .then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send('Nenhum resultado encontrado!')
        }
    }).catch(function(erro){
        console.log(erro);
        console.log('Houve um erro ao buscar as últimas medidas.', erro.sqlMessage);
        res.status(500).json(erro.sqlMessage)
    })
}

function cadastrarRecorde(req, res){
    var usuario = req.body.usuario;
    var recorde = req.body.recorde
    jumpingModel.cadastrarRecorde(usuario, recorde)
    .then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send('Nenhum resultado encontrado!')
        }
    }).catch(function(erro){
        console.log(erro);
        console.log('Houve um erro ao buscar as últimas medidas.', erro.sqlMessage);
        res.status(500).json(erro.sqlMessage)
    })
}

function puxarTop5(req, res){
    jumpingModel.puxarTop5()
    .then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send('Nenhum resultado encontrado!')
        }
    }).catch(function(erro){
        console.log(erro);
        console.log('Houve um erro ao buscar as últimas medidas.', erro.sqlMessage);
        res.status(500).json(erro.sqlMessage)
    })
}

module.exports = {
    puxarRecorde,
    cadastrarRecorde,
    puxarTop5
}