'use strict';

const facade = require('../../facade');

var {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {

    var transformedResult = undefined; // Store result state here


    // Step definition for precondition
    Given(/^All tools available and ACTOR is on the right location$/, function (callback) {
        facade.prepareEnvironment();
        callback();
    });

    // --------------------------------------------------------------- //

    // Step definitions for request
    When(/^ACTOR does a correct request$/, function (callback) {
        // Do a correct request.
        transformedResult = facade.doCorrectRequest();
        callback();
    });

    When(/^ACTOR does a incorrect request$/, function (callback) {

        // Do a incorrect request
        transformedResult = facade.doCorrectRequest();
        callback();
    });

    // --------------------------------------------------------------- //

    // Step definitions for expected results
    Then(/^ACTOR expects a correct results$/, function (callback) {

        // Assert on transformed result

        callback();

    });


    Then(/^ACTOR expect a failure result$/, function (callback) {

        callback();

    });
});

