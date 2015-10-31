var http = require('http')

var contents = {}
var counter = 0

process.argv.forEach(function(url, index) {
  if(index<2) return
  contents[url] = ""
  http.get(url, function(response) {
    response.setEncoding('utf8')
    response
    .on('data', function(data) {
      contents[url] += data
    })
    .on('end', function(){
      counter += 1
      if(counter < 3) return
      Object.keys(contents).forEach(function(key) {console.log(contents[key])})  
    })
  })  
})
