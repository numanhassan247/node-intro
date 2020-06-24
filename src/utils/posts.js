const axios = require('axios').default
debugger
const posts = {

    list(callback) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // console.log(response);
                callback(response.data, undefined)
            })
            .catch(function (error) {
                // console.log(error)
                callback([], error)
            })
    },
    getDetails(id) {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(function (response) {
                // handle success
                // console.log(response);
                callback(response.data, undefined)
            })
            .catch(function (error) {
                // handle error
                // console.log(error);
                callback([], error)
            })
    }
}
module.exports = posts