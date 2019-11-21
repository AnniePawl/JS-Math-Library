require('../src/index')

// goldenRatio() Test 
// Adds golden ratio property to a number
test('goldenRation', () => {
  expect((5).goldenRatio).toBe(1.61803398875)
})

// round() Test
// Rounds a number to nearest integer
test('round', () => {
  expect((10).round()).toBe(10)
  expect((10.2).round()).toBe(10)
  expect((10.5).round()).toBe(11)
  expect((10.9).round()).toBe(11)
})

// roundUp() Test
// Rounds a number UP to nearest integer
test('roundUp', () => {
  expect((10).roundUp()).toBe(10)
  expect((10.2).roundUp()).toBe(11)
  expect((10.5).roundUp()).toBe(11)
  expect((10.8).roundUp()).toBe(11)
})

// roundDown() Test
// Rounds a number DOWN to nearest integer
test('roundDown', () => {
  expect((10).roundDown()).toBe(10)
  expect((10.2).roundDown()).toBe(10)
  expect((10.5).roundDown()).toBe(10)
  expect((10.8).roundDown()).toBe(10)
})

// padNum() Test
// test('padNum', () => {
//   expect((27.27).padNum(2, 2)).toBe('')
// })

// degToRad() Test 
// Tranforms degrees into radians 
test('degToRad', () => {
  expect((1).degToRad()).toBe(0.017453292519943295)
  expect((5).degToRad()).toBe(0.08726646259971647)
  expect((10.5).degToRad()).toBe(0.1832595714594046)
  expect((100).degToRad()).toBe(1.7453292519943295)
})

// radToDeg Test
// Transforms radians into degrees
test('radToDeg', () => {
  expect((1).radToDeg()).toBe(57.29577951308232)
  expect((5).radToDeg()).toBe(286.4788975654116)
  expect((10.5).radToDeg()).toBe(601.6056848873644)
  expect((100).radToDeg()).toBe(5729.5779513082325)
})

//  toDollars() Test 
// Tranforms a numeric value to a string rounded 2 decimal places w/'$' in front
test('toDollars', () => {
  expect((0).toDollars()).toBe('$0.00')
  expect((10.234232).toDollars()).toBe('$10.23')
  expect((15).toDollars()).toBe('$15.00')
  expect((20.594).toDollars()).toBe('$20.59')
})

// plusTax() Test
// Returns an amount plus tax
test('plusTax', () => {
  expect((5).plusTax(.5)).toBe(7.5)
  expect((10).plusTax(.2)).toBe(12)
  expect((15).plusTax(2)).toBe(45)
})

// interest(total, year, rate) Test 
// Calculates interest over time
test('interest', () => {
  expect((100).interest())
})

// mortgage(principal, numberOfPayments, interestRate) Test
// Caclulates mortgage over time
test('mortgage', () => {
  expect()
})

// random(n) Test
// Returns a random integer between 0 and n-1
test('random', (n) => {
  expect(Number.random(10) < 10).toBe(true)
  expect(Number.random(5) > 5).toBe(false)
})

// randomRange(min, max) Test 
// Returns an integer between specified min and max
test('randomRange', (min, max) => {
  const x = Number.randomRange(2, 12)
  expect(x < 12).toBe(true)
  expect(x > 12).toBe(false)
  expect(x > 2).toBe(true)
  expect(x < 2).toBe(false)
})

// randomColor()
// Returns a random, six digit hex value
test('randomColor', () => {
  expect()
})