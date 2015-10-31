var fs = require('fs')
var filename = process.argv[2]

var callback = function(err, data) {
  if(err) return
  lines = data.toString().split('\n').length - 1
  console.log(lines)  
}
fs.readFile(filename, 'utf8', callback)
