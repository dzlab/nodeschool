currier = function(method) {
  console.log(arguments)
  return applier(method, [])
}

applier = function(method, args) {
  //console.log(method.length, args.length, arguments)
  if(method.length == args.length) {
    return method.apply(null, args)
  }else {
    return function() {
      console.log(arguments, args)
      Array.from(arguments).forEach(function(arg) {args.push(arg)})
      return applier(method, args)
    }
  }
}

module.exports = currier
