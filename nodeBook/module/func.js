const {odd, even} = require('./var');

function checkOddOrEven(num) {    
    return num % 2 == 0 ? even : odd;
}

module.exports = checkOddOrEven;