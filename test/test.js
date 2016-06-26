var birthstone = require('..');
var assert = require('chai').assert;

describe(".getBirthstone(month)", function () {
    it("should get the birthstone based on the month given", function () {
        assert.equal("garnet", birthstone.getBirthstone(1));
        assert.equal("amethyst", birthstone.getBirthstone(2));
        assert.equal("aquamarine", birthstone.getBirthstone(3));
        assert.equal("diamond", birthstone.getBirthstone(4));
        assert.equal("emerald", birthstone.getBirthstone(5));
        assert.equal("pearl", birthstone.getBirthstone(6));
        assert.equal("ruby", birthstone.getBirthstone(7));
        assert.equal("peridot", birthstone.getBirthstone(8));
        assert.equal("sapphire", birthstone.getBirthstone(9));
        assert.equal("opal", birthstone.getBirthstone(10));
        assert.equal("citrine", birthstone.getBirthstone(11));
        assert.equal("topaz", birthstone.getBirthstone(12));
        assert.equal("invalid month", birthstone.getBirthstone(13));
    });
});
