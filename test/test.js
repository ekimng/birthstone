var birthstone = require('..');
var assert = require('assert');

describe("birthstone(month)", function () {
    it("should get the birthstone based on the month given", function () {
        assert.equal(birthstone(0), "garnet");
        assert.equal(birthstone(1), "amethyst");
        assert.equal(birthstone(2), "aquamarine");
        assert.equal(birthstone(3), "diamond");
        assert.equal(birthstone(4), "emerald");
        assert.equal(birthstone(5), "pearl");
        assert.equal(birthstone(6), "ruby");
        assert.equal(birthstone(7), "peridot");
        assert.equal(birthstone(8), "sapphire");
        assert.equal(birthstone(9), "opal");
        assert.equal(birthstone(10), "citrine");
        assert.equal(birthstone(11), "topaz");
    });
});

describe("birthstone()", function () {
    it("should get the birthstone based on the current month", function () {
        assert.equal(birthstone(), birthstone(new Date().getMonth()));
    });
});

describe("birthstone(invalidMonth)", function () {
    it("should throw an error because of invalid input", function () {
        assert.throws(function () { birthstone(12) }, Error);
    });
});