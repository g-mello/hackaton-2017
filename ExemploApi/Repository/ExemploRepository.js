var sql = require('mssql'),
    config = require('../Connection/connection.js');

var exemplo = {
    ex: (req, res) => {
        sql.connect(config.conString, err => {
            new sql.Request()
                // Parametros de entrada e saida
                // .input('input_parameter', sql.Int, value)
                //.output('output_parameter', sql.VarChar(50))
                .execute('sp_buscaStatus', (err, result) => {
                    return res.json(result.recordset[1]);
                })
        })
        sql.on('error', err => {
            return res.json("Erro ao conectar com banco de dados" + err);
        })
    }
}

module.exports = exemplo;