var exemplo = require('../Repository/ExemploRepository.js')

var exemploRota = function(app) {
    app.get('/Get', exemplo.ex);
}

module.exports = exemploRota;