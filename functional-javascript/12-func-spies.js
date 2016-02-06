function Spy(target, method) {
  var spy = {
    count: 0,
    func: target[method]
  }
  console.log(spy)
  target[method] = function() {
    spy.count++
    var args = Array.prototype.slice.call(arguments);
    spy.func.apply(null, args)
  } 
  return spy
}
module.exports = Spy
