
var fs = require('fs')

var directory = process.argv[2]
var extension = process.argv[3]

fs.readdir(directory, function(err, list) {
  if(err) return
  list.filter(function(file){
    return file.endsWith('.'+extension)
  }).forEach(function(file) {
    console.log(file)
  }) 
})
