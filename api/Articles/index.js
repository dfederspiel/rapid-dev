var jsonData = require('../generate');

module.exports = async function (context, req) {
    const byId = (req.query.id);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: byId ? jsonData().articles[byId] : jsonData().articles
    };
}