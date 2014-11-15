var request = require('request');

var PI_IP = 'http://192.168.1.130:8080';

module.exports = {
  turnOn: function() {
      request(PI_IP + '/api/on', function (error, response, body) {
        console.log(error);
        console.log(response);
        console.log(body);
      });
  },
  turnOff: function() {
    request(PI_IP + '/api/off', function (error, response, body) {
      console.log(error);
      console.log(response);
      console.log(body);
    });
  }
};
