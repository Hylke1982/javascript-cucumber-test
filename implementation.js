'use strict';

/*
This is an actual implementation that will interface with the application / platform / architecture under test
 */

const request = require('request-promise-native');

const URL_UNDER_TEST_CORRECT = "https://dog.ceo/api/breed/hound/list";
const URL_UNDER_TEST_INCORRECT = "https://dog.ceo/api/breed/notcorrect/list";

var Implementation = function () {

};

Implementation.prototype.doCorrectRequest = () => {

    let options = {
        "url": URL_UNDER_TEST_CORRECT,
        method: 'GET',
        "headers": {
            "content-type": "application/json"
        }
    };

    return request(options);
};

Implementation.prototype.doIncorrectRequest = () => {
    let options = {
        "url": URL_UNDER_TEST_INCORRECT,
        method: 'GET',
        "headers": {
            "content-type": "application/json"
        }
    };

    return request(options);
};


module.exports = new Implementation();