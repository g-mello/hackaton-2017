var cidadaoRepository = require('../Repository/ExemploRepository.js');
const servidor = "./image/";

cidadaoService = {
    Post: (req, res) => {
        var requerimento = cidadaoRepository.PostRequerimento;

        saveImage(requerimento, imagemArray);
    }
}

function SalvarImagem(nomeArquivo, data) {
    var myBuffer = new Buffer(data.length);
    for (var i = 0; i < data.length; i++) {
        myBuffer[i] = data[i];
    }
    fs.writeFile(servidor + nomeArquivo, myBuffer, function (err) {
        if (err)
            return res.status(400, "Falha ao salvar arquivo")

        return res.status(200);
    });
}

module.exports = cidadaoService;