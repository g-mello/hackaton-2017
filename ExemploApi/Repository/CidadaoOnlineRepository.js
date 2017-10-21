var config = require('../Connection/CidadaoOnlineConnection.js');
var cidadaoStorage = require('../Storage/CidadaoOnlineStorage.js');

const sql = require("smn-sql")(config.conString);
const pathServer = "\\\\192.168.18.30\\anexoCidadao\\"//"./Image/"

var exemplo = {
    BuscaCidadao: (req, res) => {
        try {
            sql.request()
                .execute('sp_SelCidadao', (err, recordset) => {
                    if (err)
                        return res.status(403);

                    return res.json(recordset[0]);
                });
        } catch (error) {
            return res.status(400, "Erro  ao conectar com sp_SelCidadao: " + error);
        }
    },
    PostCidadao: (req, res) => {
        //try {
            sql.request()
                .input('nome', req.body.nome)
                .input('sobrenome', req.body.sobrenome)
                .input('rg', req.body.rg)
                .input('cpf', req.body.cpf)
                .input('telefone', req.body.telefone)
                .input('email', req.body.email)
                //.output('saida', sql.types.Int)
                .execute('sp_InsCidadao', (err, recordset) => {
                    if (err)
                        return res.status(400);

                    //var out = sql.getOutput();
                    //cidadaoStorage(out);
                    // cidadaoStorage.UploadFile()
                    return res.json(recordset);

                        
                    //var out = sql.getOutput();
                    return res.json("Cidadão cadastrado com sucesso!");

                });
        //} catch (error) {
        //    return res.status(400, "Erro  ao conectar com sp_InsCidadao: " + error);
        //}
    },
    PostRequerimento: (req, res) => {
        sql.request()
            .input('id_cidadao', req.body.id_cidadao)
            .input('cod_controle', req.body.cod_controle)
            .input('latitude', req.body.latitude)
            .input('longitude', req.body.longitude)
            .input('cep', req.body.cep)
            .input('logradouro', req.body.logradouro)
            .input('numero', req.body.numero)
            .input('bairro', req.body.bairro)
            .input('complemento', req.body.complemento)
            .input('cidade', req.body.cidade)
            .input('uf', req.body.uf)
            .input('ponto_referencia', req.body.ponto_referencia)
            .input('servico', req.body.servico)
            .input('caminho', pathServer)
            .input('status_req', req.body.status_req)
            .output('id_requerimento', sql.types.Int)
            .execute('sp_InsRequerimento', (err, recordset) => {
                if (err)
                    return res.status(403);

                var id_requerimento = sql.getOutput();
                cidadaoStorage(id_requerimento, pathServer)
                return res.json("Cadastro inserido com sucesso, Nº do atendimento: " + id_requerimento);
            });
    },
    ValidarCPF: (req, res) => {
        sql.request()
            .input('p_cpf', req.body.cpf)
            .execute('sp_ValidarCPF', (err, recordset) => {
                if (err)
                    return res.status(403);

                return res.json(recordset[0]);
            });
    },
    VerificarCodControle: (req, res) => {
        sql.request()
            .input('p_cpf',  req.body.cpf)
            .execute('sp_GetCodControle', (err, recordset) => {
                if (err)
                    return res.status(403);

                console.log(recordset);
                
                return res.json(recordset);
            });
    }

}

module.exports = exemplo;
