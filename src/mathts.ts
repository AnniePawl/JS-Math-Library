declare global {
  interface Number {
    goldenRatio(): number;
    round(): number;
    roundDown(): number;
    roundUp(): number;
    padNum(): number;
    degToRad(): number;
    radToDeg(): number;
    toDollars(): string;
    plusTax(rate: number): number;
    interest(rate: number, years: number): string;
    randomRange(): number;
    randomRange(): number;
    randomColor(): string;
  }
}

// goldenRatio()
// Returns golden ratio 
Number.goldenRatio = 1.61803398875

// round()
// Rounds a number to nearest integer
Number.prototype.round = function (): number {
  return Math.round(this)
}

// roundDown()
// Rounds a number DOWN to nearest integer 
Number.prototype.roundDown = function (): number {
  return Math.floor(this)
}

// roundUp()
// Rounds a number UP to nearest integer
Number.prototype.roundUp = function (): number {
  return Math.ceil(this)
}

// padNum(x,y)
// Pads number w/ x Os before and y Os after
Number.prototype.padNum = function (x, y) {
  let paddedNum = this.toFixed(y).toString.split('.')
  while (x >= paddedNum[0].length) {
    paddedNum[0] = '0' + paddedNum[0]
    x -= 1
  }
  return paddedNum.join(.)
}

console.log((45.45).padNum(4, 4))

// degToRad()
// Tranforms degrees into radians 
Number.prototype.degToRad = function (): number {
  return this * (Math.PI / 180)
}

// radToDeg()
// Transforms radians into degrees
Number.prototype.radToDeg = function (): number {
  return this * (180 / Math.PI)
}

// toDollars()
// Tranforms a numeric value to a string rounded 2 decimal places w/'$' in front
Number.prototype.toDollars = function (): string {
  return `$${this.toFixed(2)}`
}

// plusTax(rate)
// Returns a value plus a given tax rate. Ex rate = .2 (20%)
Number.prototype.plusTax = function (rate: number): number {
  return this + this * rate
}


// interest(total, year, rate)
// Calculates interest over time
Number.interest = function (total, year, rate) {
  let interest = rate / 100 + 1;
  return parseFloat((total * Math.pow(interest, year)).toFixed(4));
}
console.log(Number.interest(100, 2, 2))


// mortgage(principal, 

// randomNum()
// Returns a random number between 0 and n-1 
const randomNum = function (n) {
  return Math.floor(Math.random() * Math.floor(n))
}
module.exports.randomNum = randomNum


// randomRange 
// Returns an integer between a given min and max
Number.randomRange = function (min, max) {
  return Math.random() * (max - min) + min
}

// randomColor
// Returns a random, 6 digit hex value 
Number.randomColor = function () {
  var hex = '0123456789ABCDEF';
  var color = '#'
  // Create a six-digit hex color
  for (var i = 0; i < 6; i++) {

    shuffle(hex);
    color += hex[0];
  }
  return color;

};


