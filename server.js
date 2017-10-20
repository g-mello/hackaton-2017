const express = require('express');
const app = express();
const sql = require('mssql');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended:false})
const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const config = {
    user: 'sa',
    password: 'alph911*Alph911',
    server: 'localhost',
    database: 'hackaton',
}

// Cidadao
app.get('/getCidadao', function (req, res) {

    sql.close();
    sql.connect(config, function (err) {
        if (err) {
            console.log(err);
        }

        var request = new sql.Request();

        request.query('SELECT * FROM tb_cidadao', function(err, recordset) {
            if(err) {
                console.log(err);
            }
            res.send(recordset);
            console.log(recordset);
        });
    });
});

app.post('/insereCidadao', urlencodedParser, function (req, res) {
//app.post('/insereCidadao', function (req, res) {

	  var data = { nome: req.body.nome, sobrenome: req.body.sobrenome,
		       rg: req.body.rg, cpf: req.body.cpf, telefone: req.body.telefone, email: req.body.email
		       }

    console.log(req.body);

    sql.close();
    sql.connect(config, function (err) {
        if (err) {
            console.log(err);
        }

        var request = new sql.Request();

        request.query("INSERT INTO tb_cidadao(nome, sobrenome, rg, cpf, telefone, email) values($1, $2, $3, $4, $5, $6)", 
            [data.nome, data.sobrenome, data.rg, data.cpf, data.telefone, data.email]) 

            console.log("Cidadao inserido com sucesso");
        });
    
    res.send("ok");
    
});


var server = app.listen(5000, function() {
    console.log('Running 5000');
})
