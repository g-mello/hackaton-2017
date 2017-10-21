var exemplo = require('../Repository/ExemploRepository.js'),
    cidadaoOnlineService = require('../Services/CidadaoOnlineServices.js')

var exemploRota = function(app) {
    app.get('/Ping', function(req, res){return res.json("Everything is fine: "+ new Date().toLocaleString() + "!");});
    app.get('/GetCidadao', exemplo.BuscaCidadao);
    app.post('/PostCidadao', exemplo.PostCidadao);
    app.post('/PostRequerimento', exemplo.PostRequerimento);
    app.post('/ValidarCPF', exemplo.ValidarCPF);
}

module.exports = exemploRota;
