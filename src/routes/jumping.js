var express = require("express");
var router = express.Router();

var jumpingController = require("../controllers/jumpingController");

router.get('/puxarRecorde/:userid', function(req, res){
    jumpingController.puxarRecorde(req, res)
})

router.post('/cadastrarRecorde', function(req, res){
    jumpingController.cadastrarRecorde(req, res)
})

router.get('/puxarTop5', function(req, res){
    jumpingController.puxarTop5(req, res)
})

module.exports = router