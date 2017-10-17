var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    core_use = require('cors'),
    app = express(),
    port = process.env.PORT || 15002,
    router = express.Router();

app.use(core_use());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./Controller/ControllerExemplo')(app);
app.listen(port);
console.log("Hey, listen in port: " + port);