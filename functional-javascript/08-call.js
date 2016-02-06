function duckCount() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, arg) {
    if(Object.prototype.hasOwnProperty.call(arg, 'quack')) {
      return prev + 1
    }
    return prev
  }, 0)
}
module.exports = duckCount
