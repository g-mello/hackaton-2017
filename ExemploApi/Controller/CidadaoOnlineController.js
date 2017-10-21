var exemplo = require('../Repository/CidadaoOnlineRepository.js');

var exemploRota = function(app) {
    app.get('/Ping', (req, res) => res.json("Everything is fine: "+ new Date().toLocaleString() + "!"));
    app.get('/GetCidadao', exemplo.BuscaCidadao);
    app.post('/PostCidadao', exemplo.PostCidadao);
    app.post('/PostRequerimento', exemplo.PostRequerimento);
    app.post('/ValidarCPF/', exemplo.ValidarCPF);
    app.post('/VerificarCodControle', exemplo.VerificarCodControle);
}

module.exports = exemploRota;
