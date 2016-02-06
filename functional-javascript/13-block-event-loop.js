function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return
  var p = new Promise(
    function(resolve, reject) {
      setTimeout(
        function() {
          operation()
          resolve()
          //resolve(repeat(operation, --num));
        }, 1);
    }
  )
  return p.then(function() {return repeat(operation, --num);})
  /*setTimeout(function() {
    operation()
  }, 1)
  return repeat(operation, --num)*/
}

module.exports = repeat

