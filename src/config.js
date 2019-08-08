module.exports = {
    entry: ["babel-polyfill", "./app/js"]
  };

  
module.exports = function () {
    return {
        browser_sync: {
            port: 8000,
            ui: 8080
        }
    }
}
