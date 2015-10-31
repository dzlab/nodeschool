var through = require('through2')
var split = require('split')

var num = 0 
process.stdin
  .pipe(split())
  .pipe(through(function(line, _, next){
    //if(line.toString() == '') return next()
    num += 1
    if(num % 2 == 0)
      this.push(line.toString().toUpperCase()+'\n')
    else
      this.push(line.toString().toLowerCase()+'\n')
    next()
  }))
  .pipe(process.stdout)
        
