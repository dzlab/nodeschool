var fs = require('fs')

var filename = process.argv[2]

var buf = fs.readFileSync(filename)
var lines = buf.toString().split('\n')
console.log(lines.length-1)
