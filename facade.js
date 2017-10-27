'use strict';

const implementation = require('./implementation');

/*
 Create a Facade between step definitions and actual interactions to make changing technologies easy without changing
 the test definitions. This Facade could be reused for performance testing for example.
  */


var Facade = function () {

};


Facade.prototype.prepareEnvironment = () => {
    console.log("Tools are here and all systems are primed");
};

Facade.prototype.doCorrectRequest = () => {
    const promise = implementation.doCorrectRequest();
    return promise
        .then(JSON.parse)
        .then((body) => {
            console.log("body", body.message);
            return body.message;
        })
        .catch(() => console.log("exception"));

};


Facade.prototype.doIncorrectRequest = () => {

    return implementation.doIncorrectRequest()
        .then(JSON.parse);

};

module.exports = new Facade();
