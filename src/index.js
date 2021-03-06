import uniqueRandomArray from 'unique-random-array'
import marvelNames from './marvel-names'

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
