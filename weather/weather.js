const request = require('request');
const API_KEY = '84f1168200c9efe68ddaf35238d7c48e';

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect with forecast server.')
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200) {
            callback(undefined,{
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            });        
        }
    });

};

module.exports.getWeather = getWeather;