var config = require('../Connection/connection.js');
const sql = require("smn-sql")(config.conString);

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
        try {
            sql.request()
                .input('nome', req.body.nome)
                .input('sobrenome', req.body.sobrenome)
                .input('rg', req.body.rg)
                .input('cpf', req.body.cpf)
                .input('telefone', req.body.telefone)
                .input('email', req.body.email)
                .execute('sp_InsCidadao', (err, recordset) => {
                    if (err)
                        return res.status(400);

                    var numeroDocumento = res.json(recordset);
                    return res.json(numeroDocumento);
                });
        } catch (error) {
            return res.status(400, "Erro  ao conectar com sp_InsCidadao: " + error);
        }
    },
    PostRequerimento: (req, res) => {
        console.log("Testando..");
        console.log(req.body);
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
            .input('caminho', req.body.caminho)
            .input('data_envio', req.body.data_envio)
            .input('status_req', req.body.status_req)
            .execute('sp_InsRequerimento', (err, recordset) => {
                if (err)
                    return res.status(403);

                console.log("Requerimento inserido com sucesso");
                return res.json(recordset);
            });
    },
    ValidarCPF: (req, res) => {
        console.log("Testando..");
        console.log(req.body.cpf);
        sql.request()
            .input('p_cpf', req.body.cpf)
            .execute('sp_ValidarCPF', (err, recordset) => {
                if (err)
                    return res.status(403);

                return res.json(recordset[0]);
            });
    },
    VerificarCodControle: (req, res) => {
        console.log("Testando...");
        console.log(req.body.p_cpf);

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
