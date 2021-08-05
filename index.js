const port = process.env.PORT || 8080;

var express = require('express');
const { createServer } = require('http');

var app = express();
app.use(express.static('dist'))

const jsonServer = require('json-server');
const jsonData = require('./src/data/db.json');
app.use('/api', jsonServer.defaults());
app.use('/api', jsonServer.router(jsonData));

const httpServer = createServer(app);
app.use('/', express.static('dist'));

httpServer.listen(port, () => {
  console.log(`
    Server is running! 🚀
    Listening at http://localhost:${port}`);
});