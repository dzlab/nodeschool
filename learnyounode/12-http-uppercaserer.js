var http = require('http')
var stream = require('stream')

var port = process.argv[2]

var upper = new stream.Transform( { objectMode: true } )
upper._transform = function (chunk, encoding, done) {
  this.push(chunk.toString().toUpperCase())
  done()
}

var server = http.createServer(function(req, res) {
  if(req.method != 'POST') return res.end()
  req.pipe(upper).pipe(res)
  //res.end('hello')
})
server.listen(port)
