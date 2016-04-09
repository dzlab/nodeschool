function curryN(fn, n) {
  if(n == undefined) {
    n = fn.length
  }

  return function (arg) {
    if(n>1) {
      return curryN(fn.bind(null, arg), n-1)
    }
    return fn(arg)
  }
}
module.exports = curryN
