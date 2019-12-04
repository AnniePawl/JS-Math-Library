// goldenRatio()
// Returns golden ratio 
Number.goldenRatio = 1.61803398875;

// round()
// Rounds a number to nearest integer
Number.prototype.round = function () {
    return Math.round(this);
};

// roundDown()
// Rounds a number DOWN to nearest integer 
Number.prototype.roundDown = function () {
    return Math.floor(this);
};

// roundUp()
// Rounds a number UP to nearest integer
Number.prototype.roundUp = function () {
    return Math.ceil(this);
};

// padNum(x,y)
// Pads number w/ x Os before and y Os after
Number.prototype.padNum = function (x, y) {
    const paddedNum = this.toString()
    const paddedSplit = paddedNum.split('.')
    const paddedStart = paddedSplit[0].padStart(x, '0')
    const paddedEnd = paddedSplit[1].padEnd(y, '0')
    const finalPad = paddedStart + '.' + paddedEnd
    return finalPad
};

// degToRad()
// Tranforms degrees into radians 
Number.prototype.degToRad = function () {
    return this * (Math.PI / 180);
};

// radToDeg()
// Transforms radians into degrees
Number.prototype.radToDeg = function () {
    return this * (180 / Math.PI);
};

// toDollars()
// Tranforms a numeric value to a string rounded 2 decimal places w/'$' in front
Number.prototype.toDollars = function () {
    return "$" + this.toFixed(2);
};

// plusTax(rate)
// Returns a value plus a given tax rate. Ex rate = .2 (20%)
Number.prototype.plusTax = function (rate) {
    return this + this * rate;
};

// interest(total, year, rate)
// Calculates interest over time
Number.interest = function (total, year, rate) {
    var interest = rate / 100 + 1;
    return parseFloat((total * Math.pow(interest, year)).toFixed(4));
};


// mortage(principal, numberOfPayments, interestRate)
// https://stackoverflow.com/questions/17101442/how-to-calculate-mortgage-in-javascript
// Calculates Mortgage 
Number.mortgage = function (principal, numberOfPayments, interestRate) {
    const n = principal * interestRate * (Math.pow(1 + interestRate, numberOfPayments))
    const d = Math.pow(1 + interestRate, numberOfPayments) - 1
    return n / d
}

// randomNum()
// Returns a random number between 0 and n-1 
Number.random = function (n) {
    return Math.floor(Math.random() * Math.floor(n))
}

// randomRange 
// Returns an integer between a given min and max
Number.randomRange = function (min, max) {
    return Math.random() * (max - min) + min;
};

// randomColor
// Returns a random, 6 digit hex value 
Number.randomColor = function () {
    return Number.random(255 * 255 * 255).toHex()
}
