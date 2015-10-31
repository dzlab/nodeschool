var mymodule = require('./06-makeit-modular-module')

var directory = process.argv[2]
var extension = process.argv[3]

mymodule(directory, extension, function(err, data) {
  data.forEach(function(file) {
    console.log(file)
  }) 
})
