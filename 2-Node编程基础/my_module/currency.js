const canadianDollar = 0.91;

function roundTwo(amout) {
    return Math.round(amout * 100) / 100;
}

exports.canadianDollar = canadian => roundTwo(canadian * canadianDollar);
exports.USToCanadian = us => roundTwo(us / canadianDollar);