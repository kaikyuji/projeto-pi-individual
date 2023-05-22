var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/informacoes/:idUsuario", function (req, res) {
    usuarioController.buscarInformacoes(req, res);
});

router.post("/biografia", function (req, res) {
    usuarioController.editarBio(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get('/posts/:idPost', function(req, res){
    usuarioController.buscarPost(req, res)
})

router.get('/comentarios/:idPost', function(req, res){
    usuarioController.buscarComentarios(req, res)
})

router.post('/publicarComentario', function(req, res){
    usuarioController.publicarComentario(req, res)
})

router.post('/publicar', function(req,res){
    usuarioController.publicarNovo(req, res)
})

router.get('/contarPostsUser/:idUsuario', function(req, res){
    usuarioController.contarPostagensUsuario(req, res)
})

router.get('/contarPosts', function(req, res){
    usuarioController.contarPostagens(req, res)
})

module.exports = router;