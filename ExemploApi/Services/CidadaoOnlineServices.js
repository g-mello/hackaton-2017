var fs = require('fs');
const servidor = "./image/";

cidadaoService = {
    UploadFile: (nomeArquivo, data) => {
        var imagemArray = getByteArray('./image/IMG_23122016_085544.png')
        SalvarImagem(nomeArquivo, imagemArray);
    }
}

function SalvarImagem(nomeArquivo, data) {
    var myBuffer = new Buffer(data.length);
    for (var i = 0; i < data.length; i++) {
        myBuffer[i] = data[i];
    }
    fs.writeFile(servidor + nomeArquivo, myBuffer, function (err) {
    });
}

function getByteArray(filePath) {
    let fileData = fs.readFileSync(filePath).toString('hex');
    let result = []
    for (var i = 0; i < fileData.length; i += 2)
        result.push('0x' + fileData[i] + '' + fileData[i + 1])
    return result;
}

module.exports = cidadaoService;