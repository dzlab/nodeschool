// retruns double quoted words in string
module.exports = function(str) {
  return str.match(/\"(\w*\s?)*\"/g)
}
