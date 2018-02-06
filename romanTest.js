var assert = require('chai').assert;
var romanNumeralConverter = require('./romanNumeralConverter');

describe("RomanNumeralConverter", function() {
  xit("can convert I to 1", function() {
    //Arrange
    var expected = 1;
    //Act
    var actual = romanNumeralConverter("I");
    //Assert
    assert.equal(actual, expected);
  });

  xit("can convert V to 5", function() {
    //Arrange
    var expected = 5;
    //Act
    var actual = romanNumeralConverter("V");
    //Assert
    assert.equal(actual, expected);
  });

  xit("can convert VI to 6", function() {
    //Arrange
    var expected = 6;
    //Act
    var actual = romanNumeralConverter("VI");
    //Assert
    assert.equal(actual, expected);
  });

  it("can convert IV to 4", function() {
    //Arrange
    var expected = 4;
    //Act
    var actual = romanNumeralConverter("IV");
    //Assert
    assert.equal(actual, expected);
  });
  xit("can convert III to 3", function() {
    //Arrange
    var expected = 3;
    //Act
    var actual = romanNumeralConverter("III");
    //Assert
    assert.equal(actual, expected);
  });
  it("can convert XIX to 19", function() {
    //Arrange
    var expected = 19;
    //Act
    var actual = romanNumeralConverter("XIX");
    //Assert
    assert.equal(actual, expected);
  });
  it("can convert XV to 15", function() {
    //Arrange
    var expected = 15;
    //Act
    var actual = romanNumeralConverter("XV");
    //Assert
    assert.equal(actual, expected);
  });
  it("can convert XL to 40", function() {
    //Arrange
    var expected = 40;
    //Act
    var actual = romanNumeralConverter("XL");
    //Assert
    assert.equal(actual, expected);
  });
  it("can convert XVX to 15", function() {
    //Arrange
    var expected = 15;
    //Act
    var actual = romanNumeralConverter("XV");
    //Assert
    assert.equal(actual, expected);
  });
  it("can convert XCIV to 94", function() {
    //Arrange
    var expected = 94;
    //Act
    var actual = romanNumeralConverter("XCIV");
    //Assert
    assert.equal(actual, expected);
  });

});
