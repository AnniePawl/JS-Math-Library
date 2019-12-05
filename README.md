# JavaScript Math Library 
![GitHub repo size](https://img.shields.io/github/repo-size/AnniePawl/JS-Math-Library?style=flat-square)
![npm](https://img.shields.io/npm/v/@annapawl/math_library?style=flat-square)
[![Build Status](https://travis-ci.com/AnniePawl/JS-Math-Library.svg?branch=master)](https://travis-ci.com/AnniePawl/JS-Math-Library)
[![Coverage Status](https://coveralls.io/repos/github/AnniePawl/JS-Math-Library/badge.svg?branch=master)](https://coveralls.io/github/AnniePawl/JS-Math-Library?branch=master)
</br>

This is a lightweight JavaScript library that extends the functionality of the number object. </br>

### Getting Started
Run the following command in your project folder: <br/>
```
npm install @annapawl/math_library --save
``` 
Then add this to your index.js file <br/>
```
require('@annapawl/src/math_library')
```

## Golden Ratio 
**goldenRatio()** </br>
This function returns the golden ratio</br>
`Number.goldenRatio()` &#8594; 1.61803398875

## Rounding Methods
**round()** </br>
This method rounds a specified number</br> 
`'9.99.round()` &#8594; 10

**roundDown()** </br>
This method rounds a specified number **down**</br> 
`'9.99.roundDown()` &#8594; 9

**roundUp()** </br>
This method rounds a specified number **up**</br> 
`'9.2.roundUp()` &#8594; 10

## Degrees ↔ Radians 
**degToRad(n)** </br> 
This methods converts degrees to radians </br>
`45.degToRad()`&#8594; 0.785

**radToDeg(n)** </br> 
This methods converts radians to degrees </br>
`.785.RadTodeg()`&#8594; 44.977

## Money Methods
**toDollars(amount)** </br> 
This methods takes in a numeric value and returns a string behinning with '$' and rounded to two decimal palces </br>
`3.9.toDollars()`&#8594; '$3.90' 

**plusTax(rate)** </br> 
This methods takes in a numeric value and returns the amount with tax </br>
`10.plusTax(.2)`&#8594; '$12' 

**plusInterest(total, year, rate)** </br> 
This methods calculates interests over a specified timeline </br>
`Number.plusInterest(100,2,2)`&#8594; 104.04 

**mortgage(principal, year, rate)** </br> 
This methods calculates mortgage </br>
`Number.mortgage(10,5,10)`&#8594; 100.00

## Random Methods
**random(n)** </br> 
This method returns an integer between 0 and n-1 </br> 
`'random(10)` &#8594; 8

**randomRange(min,max)** </br> 
This method returns an integer between specified min and max </br> 
`'randomRange(50,100)` &#8594; 71

**randomColor()** </br> 
This method returns a random hex value </br> 
`'randomColor()` &#8594; 8a7f43


## Test Coverage 
```
npx jest --coverage
```
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |      100 |      100 |      100 |                   |
 index.js |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|

