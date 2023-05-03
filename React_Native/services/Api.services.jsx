const axios = require('axios');

class ApiServices {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3000/api'

        })
    }
}
