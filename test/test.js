var birthstone = require('..');
var assert = require('assert');

describe("birthstone(month)", function () {
    it("should get the birthstone(s) based on the month given", function () {
        assert.deepEqual(birthstone(0), ["Garnet"]);
        assert.deepEqual(birthstone(1), ["Amethyst"]);
        assert.deepEqual(birthstone(2), ["Aquamarine", "Bloodstone"]);
        assert.deepEqual(birthstone(3), ["Diamond"]);
        assert.deepEqual(birthstone(4), ["Emerald"]);
        assert.deepEqual(birthstone(5), ["Pearl", "Moonstone", "Alexandrite"]);
        assert.deepEqual(birthstone(6), ["Ruby"]);
        assert.deepEqual(birthstone(7), ["Peridot"]);
        assert.deepEqual(birthstone(8), ["Sapphire"]);
        assert.deepEqual(birthstone(9), ["Opal", "Tourmaline"]);
        assert.deepEqual(birthstone(10), ["Topaz", "Citrine"]);
        assert.deepEqual(birthstone(11), ["Turquoise", "Zircon", "Tanzanite"]);
    });
});

describe("birthstone()", function () {
    it("should get the birthstone(s) based on the current month", function () {
        assert.deepEqual(birthstone(), birthstone(new Date().getMonth()));
    });
});

describe("birthstone(invalidMonth)", function () {
    it("should throw an error because of invalid input", function () {
        assert.throws(function () { birthstone(12) }, Error);
    });
});