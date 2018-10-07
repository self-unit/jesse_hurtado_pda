var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should add 1+4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  });

  it('it should subtract 7-4 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  });

  it('it should multiply 3x5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.equal(actual, 15);
  });

  it('it should divide 21/7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  });

  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(5);
    calculator.numberClick(6);
    const actual = calculator.runningTotal;
    assert.equal(actual, 256);
  });

  it('it should chain multiple operations together', function(){
    calculator.previousTotal = 20;
    calculator.previousOperator = '/';
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual, 14);
  });

  it('it should clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 20;
    calculator.previousOperator = '/';
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.clearClick();
    const actual = calculator.runningTotal;
    assert.equal(actual, 0);
  });

});
