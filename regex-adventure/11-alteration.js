// check string starst with cat|dog|robot followed by number
module.exports = function (str) {
  return /^(cat|dog|robot)\d+$/.test(str)
}
