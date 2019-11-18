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
