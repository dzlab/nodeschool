var net = require('net')
//var strftime = require('strftime')

var port = process.argv[2]

var server = net.createServer(function(socket) {
  var date = new Date()
  console.log(date)
  //socket.write(strftime('YYY-MM-DD hh:mm', date))
  socket.write(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes())
  socket.write('\n')
  socket.end()
})
server.listen(port)
