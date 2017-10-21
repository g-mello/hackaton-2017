var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    core_use = require('cors'),
    port = process.env.PORT || 3000,
    //port = 3000,
    router = express.Router();

app.use(core_use());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./Controller/CidadaoOnlineController')(app);
app.listen(port);
console.log("Hey, listen in port: " + port);
