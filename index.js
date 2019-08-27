const port = process.env.PORT || 1337;
var express = require('express');
var path = require('path');
var app = express();
app.use(express.static('dist'))
var router = express.Router();
let jsonServer = require('json-server');
var jsonData = require('./src/data/generate.js');

const appRoot = path.resolve(__dirname);


app.use(['/discover*'], function (req, res) {
    res.sendFile(appRoot + '/dist/index.html');
});
app.use('/api', jsonServer.defaults());
app.use('/api', jsonServer.router(jsonData()));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port);