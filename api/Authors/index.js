var jsonData = require('../../src/data/generate');

module.exports = async function (context, req) {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: jsonData().authors
    };
}