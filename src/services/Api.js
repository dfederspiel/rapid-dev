class Api {

    async headers() {
        return {
            'Content-Type': 'application/json',
        };
    }

    async fetch(url, options) {
        options = { method: "GET", ...options, headers: { ...await this.headers() } };

        return fetch(url, options)
            .then(this.handleResponse)
    }

    handleResponse(res) {
        console.log(res);
        if (res.ok)
            return res.json();
        throw "Error fetching";
    }
}

export default new Api();