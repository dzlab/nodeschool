// 02. baby steps
var sum = process.argv.reduce(function (previous, current, index, array) {
  if(index < 2) return 0
  return previous + Number(current)  
}) 
console.log(sum)
