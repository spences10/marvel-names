var uniqueRandomArray = require('unique-random-array')
var marvelNames = require('./marvel-names')

module.exports = {
  all: marvelNames,
  random: uniqueRandomArray(marvelNames)
}
