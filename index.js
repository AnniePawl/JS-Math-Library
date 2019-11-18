// goldenRatio()
// Adds golden ratio property to a number
Number.prototype.goldenRatio = 1.61803398875

// round()
// Rounds a number to nearest integer
Number.prototype.round = function () {
  return Math.round(this)
}

// roundDown()
// Rounds a number DOWN to nearest integer 
Number.prototype.roundDown = function () {
  return Math.floor(this)
}

// roundUp()
// Rounds a number UP to nearest integer
Number.prototype.roundUp = function () {
  return Math.ceil(this)
}

// pad(x,y)
// Pads number w/ x Os before and y Os after

// degToRad()
// Tranforms degrees into radians 
Number.prototype.degToRad = function () {
  return this * (Math.PI / 180)
}

// radToDeg()
// Transforms radians into degrees
Number.prototype.radToDeg = function () {
  return this * (180 / Math.PI)
}

// toDollars()
// Tranforms a numeric value to a string rounded 2 decimal places w/'$' in front
Number.prototype.toDollars = function () {
  return '$' + this.toFixed(2).toString()
}

// plusTax(rate)
// Returns a value plus a given tax rate. Ex rate = .2 (20%)
Number.prototype.plusTax = function (rate) {
  return this + this * rate
}


// interest(total, year, rate)
// Calculates interest over time

// randomNum()
// Returns a random number between 0 and n-1 
// Number.prototype.randomNum = function (n) {
//   return Math.floor(Math.random() * Math.floor(n))
// }

// console.log(randomNum(5))

// randomRange 
// Returns an integer between a given min and max
// Number.prototype.randomRange

// randomColor
// Returns a random, 6 digit hex value 
// Number.prototype.randomColor = function () {
//   return Number.random(255 * 255 * 255)
// }

// 