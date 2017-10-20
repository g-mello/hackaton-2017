var exemplo = require('../Repository/ExemploRepository.js')

var exemploRota = function(app) {
    app.get('/Ping', function(req, res){return res.json("Everything is fine: "+ new Date().toLocaleString() + "!");});
    app.get('/GetCidadao', exemplo.BuscaCidadao);
    app.post('/PostCidadao', exemplo.PostCidadao);
    app.post('/PostRequerimento', exemplo.PostRequerimento);
}

module.exports = exemploRota;
