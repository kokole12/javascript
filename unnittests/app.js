const calc = (type, a, b) => {
    if (type === 'SUM') {
        return Math.round(a + b);
    }
    if (type === 'SUB') {
        return (a - b);
    }
};

module.exports = calc;
