var trumpet = require('trumpet')
var through = require('through2')

var tr = trumpet()
tr.pipe(process.stdout)
//NOT WORKING
tr.select('.loud').createStream()
  .pipe(through(function(buf, _, next) {
    if(buf == '') return next()
    this.push(buf.toString().toUpperCase())
    next()
  }))
  .pipe(process.stdout)

process.stdin.pipe(tr)

