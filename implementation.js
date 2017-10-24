'use strict';

/*
This is an actual implementation that will interface with the application / platform / architecture under test
 */

const request = require('request-promise-native');
    request.debug = true;

const URL_UNDER_TEST_CORRECT = "https://dog.ceo/api/breed/hound/list";


const URL_UNDER_TEST_INCORRECT = "https://dog.ceo/api/breed/hound/list";

var Implementation = function () {

};


Implementation.prototype.doCorrectRequest = () => {
    console.log("DOiddddd ng request");

    let options = {
      "url" : URL_UNDER_TEST_CORRECT,
        method: 'GET',
      "headers" : {
          "content-type" : "application/json"
      }
    };
    request(options)
        .then(function(error, response, body) {
            console.log('*************', arguments);
            throw('nee we');
            callback();
        })
        .catch(function(error, response, body) {
            console.log('!!!!!!!!!!!1 ', arguments);
            throw('nee err');
            callback();
        });

    var callback = () => {
        console.log("Callback");
        return "bala";
    }
};


module.exports = new Implementation();