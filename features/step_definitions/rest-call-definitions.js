'use strict';

const facade = require('../../facade');
const expect = require('chai').expect;

var {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {


    // Step definition for precondition
    Given(/^All tools available and ACTOR is on the right location$/, function () {
        return facade.prepareEnvironment();
    });

    // --------------------------------------------------------------- //

    // Step definitions for request
    When(/^ACTOR does a correct request$/, function () {
        // Do a correct request.
        return facade.doCorrectRequest()
            .then((message) => this.transformedResult = message);
    });

    When(/^ACTOR does a incorrect request$/, function () {

        // Do a incorrect request
        return facade.doIncorrectRequest()
            .then((message) => this.transformedResult = message);
    });

    // --------------------------------------------------------------- //

    // Step definitions for expected results
    Then(/^ACTOR expects a correct result$/, function () {
        console.log("transformedResult", this.transformedResult);
        expect(this.transformedResult).to.be.an('array');
    });


    Then(/^ACTOR expect a incorrect result$/, function () {
        console.log("transformedResult", this.transformedResult);
        expect(this.transformedResult).not.to.be.an('array');
    });
});

