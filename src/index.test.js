var expect = require('chai').expect;
var marvel = require('./index');

describe('marvel-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(marvel.all).to.satisfy(isArrayOfStrings)

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string'
        })
      }
    })

    it('should contain `Wolverine`', function() {
      expect(marvel.all).to.include('Wolverine')
    })
  })

  describe('random', function() {
    it('should return a random item from the marvel.all', function() {
      var randomItem = marvel.random()
      expect(marvel.all).to.include(randomItem)

      it('should return an array of random items if passed a number', function () {
        var randomItems = marvel.random(3)
        expect(randomItems).to.have.length(3)
        randomItems.forEach(function(item) {
          expect(marvel.all).to.include(item)
        });
      })
    })
  })
})