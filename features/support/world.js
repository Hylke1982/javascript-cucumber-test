var {defineSupportCode} = require('cucumber');

function CustomWorld() {
    this.transformedResult;
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
});