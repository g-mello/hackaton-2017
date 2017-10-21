// var sql = require('mssql'),
var config = require('../Connection/connection.js');
const sql = require("smn-sql")(config.conString);

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

         sql.request()
            .execute('sp_SelCidadao', (err, recordset) => {
                if (err)
                    return res.status(403);

                return res.json(recordset[0]);
            });
    },
    PostCidadao: (req, res) => {

        sql.request()
            .input('nome',  req.body.nome)
            .input('sobrenome', req.body.sobrenome)
            .input('rg',  req.body.rg)
            .input('cpf',  req.body.cpf)
            .input('telefone', req.body.telefone)
            .input('email', req.body.email)
            .execute('sp_InsCidadao', (err, recordset) => {
                if (err)
                    return res.status(403);

                console.log("Cidadao inserido com sucesso");
                return res.json(recordset);
            });
    },
    PostRequerimento: (req, res) => {
        sql.request()
            .input('id_cidadao',  req.body.id_cidadao)
            .input('cod_controle', req.body.cod_controle)
            .input('latitude',  req.body.latitude)
            .input('longitude',  req.body.longitude)
            .input('cep',  req.body.cep)
            .input('logradouro', req.body.logradouro)
            .input('numero', req.body.numero)
            .input('bairro', req.body.bairro)
            .input('complemento', req.body.complemento)
            .input('cidade', req.body.cidade)
            .input('uf', req.body.uf)
            .input('ponto_referencia', req.body.ponto_referencia)
            .input('observacao', req.body.observacao)
            .input('status_req', req.body.status_req)
            .execute('sp_InsRequerimento', (err, recordset) => {
                if (err)
                    return res.status(403);

                console.log("Requerimento inserido com sucesso");
                return res.json(recordset);
            });
    },
    ValidarCPF: (req, res) => {

        console.log("Testando...");
        console.log(req.body.cpf);

        sql.request()
            .input('cpf', req.body.cpf)
            .execute('sp_ValidarCPF', (err, recordset) => {
                if (err)
                    return res.status(403);

                console.log(recordset);
                
                return res.json(recordset);
            });
    }/*,
    VerificarCodControle: (req, res) => {
        //console.log("Testando...");
        //console.log(req.body.cod_controle);
        sql.request()
            .input('cod_controle',  req.body.cod_controle)
            .execute('sp_GetCodControle', (err, recordset) => {
                if (err)
                    return res.status(403);

                console.log(recordset);
                
                return res.json(recordset);
            });
    }
    */
    
}

module.exports = exemplo;
