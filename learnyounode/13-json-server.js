var http = require('http')
var url = require('url')

var port = process.argv[2]


var server = http.createServer(function(req, res) {
  if(req.method != 'GET') return res.done()
  var info = url.parse(req.url, true)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  if(info.pathname == '/api/parsetime') {//JSON.stringfy() 
    var date = new Date(info.query.iso)
    var data = {'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()}
    res.end(JSON.stringify(data))
  }
  else if(info.pathname == '/api/unixtime') {
    var date = new Date(info.query.iso)
    var data = {'unixtime': date.getTime()}
    res.end(JSON.stringify(data))
  }
})
server.listen(port)
