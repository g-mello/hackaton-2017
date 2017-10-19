const express = require('express');
const app = express();

app.get('/', function (req, res) {
    const sql = require('mssql');

    const config = {
        user: 'sa',
        password: 'cloudmed',
        server: 'PEIXOTO',
        database: 'cidadaoOnline',
    }
    sql.close();
    sql.connect(config, function (err) {
        if (err) {
            console.log(err);
        }

        var request = new sql.Request();

        request.query('SELECT * FROM tb_requerimento', function(err, recordset) {
            if(err) {
                console.log(err);
            }
            var response = recordset;
            res.send(response);
            console.log(response.recordset[0].logradouro);
        });
    });
});

var server = app.listen(5000, function() {
    console.log('Running 5000');
})