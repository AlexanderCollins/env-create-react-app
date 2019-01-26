var expect = require("chai").expect;

var {ENVIRON_A, ENVIRON_B} = require('../env-create-react-app');

describe("Check Environment Variable Values", function() {
    it("correctly extrapolates ENVIRON_A", function() {
        expect(ENVIRON_A).to.equal("1");
    });
    it("correctly extrapolates ENVIRON_B", function() {
        expect(ENVIRON_B).to.equal("2");
    });
});