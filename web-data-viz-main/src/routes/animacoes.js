var express = require("express");
var router = express.Router();

var animacaoController = require("../controllers/animacaoController");

//Recebendo os dados do html e direcionando para a função enviar de animacaoController.js
router.post("/enviar", function (req, res) {
    animacaoController.enviar(req, res);
});

module.exports = router;