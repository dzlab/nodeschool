// check if filename is sequence of digits followed by .jpg or .jpeg
module.exports = function(str) {
  return /\d+(\.jpg|\.jpeg)$/.test(str)
}
