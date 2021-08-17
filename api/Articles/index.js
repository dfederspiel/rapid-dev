var jsonData = require('../generate');

module.exports = async function (context, req) {
    const byId = (req.query.id);
    context.res = {
        body: byId ? [jsonData().articles[byId]] : jsonData().articles
    };
}