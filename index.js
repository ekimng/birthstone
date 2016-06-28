/**
 * Get the birthstone based on the given `month`.
 * If not given a month then it will use the current month.
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
            return "garnet";
        case 1:
            return "amethyst";
        case 2:
            return "aquamarine";
        case 3:
            return "diamond";
        case 4:
            return "emerald";
        case 5:
            return "pearl";
        case 6:
            return "ruby";
        case 7:
            return "peridot";
        case 8:
            return "sapphire";
        case 9:
            return "opal";
        case 10:
            return "citrine";
        case 11:
            return "topaz";
        default:
            throw new Error("Invalid month. The month should be a zero-based value (where zero indicates the first month of the year).");
    }
}