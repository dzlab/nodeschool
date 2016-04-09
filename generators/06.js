var fs = require('fs')

function askFoo() {
  return new Promise(function (resolve, reject) {
    resolve('foo') 
  })
}

function run(generator) {
  var it = generator()
  go = function(result) {
    if (result.done) {
      return result.value
    }
    result.value.then(function(result) {
      // Promesse tenue
      go(it.next(result))
    }, function(err) {
      // Rejet de la promesse
      go(it.throw(err))
    });
  }
  go(it.next())
}

run(function*() {
  // catch exception
  var foo = yield askFoo()
  console.log(foo)
  /*var firstFile = null
  try {
  var dirFiles = yield fs.readdir('NoNoNoNo', done) // No such dir
  }catch(e) {
  }
  if (dirFiles) {
    firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
  }
  console.log(firstFile)*/
})
