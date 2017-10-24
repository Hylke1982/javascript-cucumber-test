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
    var result = implementation.doCorrectRequest();
    // If needed transform result here
    console.log("Result", result);
    return result;

};


Facade.prototype.doIncorrectRequest = () => {

};

module.exports = new Facade();
