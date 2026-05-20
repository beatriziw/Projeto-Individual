var animacaoModel = require("../models/animacaoModel");
//var aquarioModel = require("../models/animacaoModel");


function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idServer;
    var disney = req.body.disneyServer;
    var nick = req.body.nickServer;
    var cartoon = req.body.cartoonServer;
    var favorito = req.body.favoritoServer;
    var emissora = req.body.emissoraServer;
    var tecnica = req.body.tecnicaServer;
    console.log(`Animacao controller`);

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        animacaoModel.enviar(idUsuario, disney, nick, cartoon, favorito, emissora, tecnica)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao enviar! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    enviar
}