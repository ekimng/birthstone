/**
 * Get the birthstone based on the given `month`.
 * If not given a month then it will use the current month.
 * 
 * source: http://www.agta.org/gemstones/birthstones.html
 *
 * @param {Number} month zero-based value (where zero indicates the first month of the year).
 * @api public
 */
module.exports = function birthstone(month) {
    if (typeof month === 'undefined' || month === null) {
        return birthstone(new Date().getMonth());
    }

    switch (month) {
        case 0:
            return ["Garnet"];
        case 1:
            return ["Amethyst"];
        case 2:
            return ["Aquamarine", "Bloodstone"];
        case 3:
            return ["Diamond"];
        case 4:
            return ["Emerald"];
        case 5:
            return ["Pearl", "Moonstone", "Alexandrite"];
        case 6:
            return ["Ruby"];
        case 7:
            return ["Peridot"];
        case 8:
            return ["Sapphire"];
        case 9:
            return ["Opal", "Tourmaline"];
        case 10:
            return ["Topaz", "Citrine"];
        case 11:
            return ["Turquoise", "Zircon", "Tanzanite"];
        default:
            throw new Error("Invalid month. The month should be a zero-based value (where zero indicates the first month of the year).");
    }
}