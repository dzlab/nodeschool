var http = require('http')

var url = process.argv[2]
var content = ""
http.get(url, function(response) {
  response.setEncoding('utf8')
  response
  .on('data', function(data){
    content += data
  })
  .on('end', function() {
    console.log(content.length)
    console.log(content)
  })
})
