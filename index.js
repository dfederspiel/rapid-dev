const port = process.env.PORT || 1337;
var express = require('express');
var path = require('path');
var app = express();
app.use(express.static('dist'))
var router = express.Router();
let jsonServer = require('json-server');
var jsonData = require('./src/data/generate.js');

const appRoot = path.resolve(__dirname);

var json_server = jsonServer.create({
    verbosity: {
        level: "info",
        urlTracing: false
    }
});
json_server.use(jsonServer.defaults());
json_server.use(jsonServer.router(jsonData()));
router.use('/api', json_server);

app.use('/api', router);
app.use(['/discover*'], function (req, res) {
    res.sendFile(appRoot + '/dist/index.html');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.listen(port);