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

    sql.connect(config, function (err) {
        if (err) {
            console.log(err);
        }

        var request = new sql.Request();

        request.query('SELECT * FROM tb_requerimento', function(err, recordset) {
            if(err) {
                console.log(err);
            }

            res.send(recordset);
        });
    });
});

var server = app.listen(5000, function() {
    console.log('Running 5000');
})