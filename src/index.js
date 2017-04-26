var uniqueRandomArray = require('unique-random-array')
var marvelNames = require('./marvel-names')
var getRandomItem = uniqueRandomArray(marvelNames)

module.exports = {
  all: marvelNames,
  random: random
}

function random(number) {
  if (number === undefined) {
    return getRandomItem()
  } else {
    var randomItems = []
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem())
    }
    return randomItems
  }
}
