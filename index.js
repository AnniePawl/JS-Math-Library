// goldenRatio()
// Adds golden ratio property to a number
// Number.prototype.goldenRatio = function () {
//   return Math.goldenRatio(this)
// }

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

// degToRad()
// Tranforms degrees into radians 
Number.prototype.degToRad = function () {
  return this * (Math.PI / 180)
}
// console.log((10).degToRad())

// radToDeg()
// Transforms radians into degrees
Number.prototype.radToDeg = function () {
  return this * (180 / Math.PI)
}
// console.log((10).radToDeg())


// toDollars()
// Numeric value becomes string rounded 2 decimal places w/'$' in front
Number.prototype.toDollars = function () {
  return '$' + this.toFixed(2).toString()
}
console.log(10.234232.toDollars())