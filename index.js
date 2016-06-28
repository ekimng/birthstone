/**
 * Get the birthstone based on the given `month`.
 *
 * @param {Number} month
 * @api public
 */
exports.getBirthstone = function (month) {
    switch (month) {
        case 1:
            return "garnet";
        case 2:
            return "amethyst";
        case 3:
            return "aquamarine";
        case 4:
            return "diamond";
        case 5:
            return "emerald";
        case 6:
            return "pearl";
        case 7:
            return "ruby";
        case 8:
            return "peridot";
        case 9:
            return "sapphire";
        case 10:
            return "opal";
        case 11:
            return "citrine";
        case 12:
            return "topaz";
        default:
            return "invalid month"
    }
}