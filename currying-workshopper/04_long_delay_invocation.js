delayed = function(x) {
  if(x === undefined) return 0
    
  return function(y) {
   if(y === undefined) 
     return x
   else 
     return delayed(x+y)
  }
}

module.exports = delayed
