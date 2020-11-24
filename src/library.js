const request = require('request');

var url = 'http://www.omdbapi.com/?t=School+of+rock&apikey=e4f4bf3e';

function llamadoApi(callback){

    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            return callback(JSON.parse(body));
        }  
});
}

module.exports = llamadoApi;