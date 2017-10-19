var exemplo = require('../Repository/ExemploRepository.js')

var exemploRota = function(app) {
    app.get('/Get', exemplo.ex);
    app.get('/GetCidadao', exemplo.BuscaCidadao);
}

module.exports = exemploRota;