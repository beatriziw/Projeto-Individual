var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function enviar (idUsuario, disney, nick, cartoon, favorito, emissora, tecnica) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviar():", idUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO preferencias (fkusuario, fkdisneyfav, fknickfav, fkcartoonfav, fkfav, fkemissorafav, fktecnica) VALUES ('${idUsuario}','${disney}', '${nick}','${cartoon}','${favorito}','${emissora}','${tecnica}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviar
};