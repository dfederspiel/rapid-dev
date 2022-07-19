const express = require('express');
const createHandler = require('azure-function-express').createHandler;


const middleware = (req, res, next) => {
    if (req.query !== undefined && req.query.name === 'gary') {
        res.status(500).json({ error: 'message' })
    }
    else if (req.query.name !== undefined) {
        res.locals.name = `${req.query.name}! 🚀`
        next();
    }
    else {
        res.locals.name = `I'm Middleware! 🚀`
        next();
    }
}

const baseURL = '/api/v1'

const app = express();

const router = express.Router();
router.use(require('body-parser').urlencoded({ 'extended': true }));
router.use(middleware);
router.get('', (req, res) => {
    res.send('root url')
});

router.get('/articles', middleware, (req, res) => {
    res.send(`hello world, From ${res.locals.name}`)
});

router.post('/articles', (req, res) => {
    res.send(`hello post world! From ${res.locals.name}`)
});

app.use(baseURL, router)

module.exports = createHandler(app);
