class Api {

    async headers() {
        return {
            'Content-Type': 'application/json',
        };
    }

    async fetch(url, options) {
        options = { method: "GET", ...options, headers: { ...await this.headers() } };
        return fetch(url, options)
            .then(res =>res.json())
            .then(res => JSON.stringify(res))
            .catch(error=> console.log(`Response Error for '${url}'`, error));
    }

    // fetch('http://example.com/movies.json')
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(myJson) {
    //   console.log(JSON.stringify(myJson));
    // });
}

export default new Api();