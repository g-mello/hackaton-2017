var sql = require('mssql'),
    config = require('../Connection/connection.js');

var exemplo = {
    ex: (req, res) => {
        sql.connect(config.conString, err => {
            new sql.Request()
                // Parametros de entrada e saida
                // .input('input_parameter', sql.Int, value)
                //.output('output_parameter', sql.VarChar(50))
                .execute('sp_teste', (err, result) => {
                    sql.close();
                    return res.json(result.recordset);
                })
        })
        sql.on('error', err => {
            return res.json("Erro ao conectar com banco de dados" + err);
        })
    },
    BuscaCidadao: (req, res) => {
        sql.connect(config.conString, err => {
            new sql.Request()
                // Parametros de entrada e saida
                // .input('input_parameter', sql.Int, value)
                //.output('output_parameter', sql.VarChar(50))
                .execute('sp_SelCidadao', (err, result) => {
                    sql.close();
                    return res.json(result.recordset);
                })
        })
        sql.on('error', err => {
            return res.json("Erro ao conectar com banco de dados" + err);
        })
    }
}

module.exports = exemplo;