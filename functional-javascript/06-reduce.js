function countWords(inputWords) {
  return inputWords.reduce(function(dict, current, index, array){
    if (current in dict == false) {
      dict[current] = 0
    }
    dict[current] += 1
    return dict
  }, {})
}
module.exports = countWords
