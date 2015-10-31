var fs = require('fs')

module.exports = function(directory, extension, callback) {
  fs.readdir(directory, function(err, list) {
    if(err) return callback(err, null)
    data = list.filter(function(file){
      return file.endsWith('.'+extension)
    })
    callback(null, data)
  })
}
