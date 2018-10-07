var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should add two numbers together', function(){
    calculator.previousTotal = 2;
    calculator.add(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 6);
  });

  it('it should subtract two numbers', function(){
    calculator.previousTotal = 5;
    calculator.subtract(3);
    const actual = calculator.runningTotal;
    assert.equal(actual, 2);
  });

  it('it should multiply two numbers together', function(){
    assert.equal(true, calculator.multiply());
  });

  it('it should divide two numbers', function(){
    assert.equal(true, calculator.divide());
  });

  it('it should have a numberClick function', function(){
    assert.equal(true, calculator.numberClick());
  });

  it('it should have a clearClick function', function(){
    assert.equal(true, calculator.clearClick());
  });

});
