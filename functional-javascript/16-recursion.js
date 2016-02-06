  
  function recurrent(tree) {
    if(tree==undefined || tree.dependencies==undefined) return []
    var deps = tree.dependencies
    var all = Object.keys(deps).map(function(key) {
      var result = []
      result.push( key + '@' + deps[key].version)
      console.log(deps[key])
      recurrent(deps[key]).forEach(function(elm) {
        if(!(elm in result)) {
          result.push(elm)
        }
      })
      return result
    }).reduce(function(prev, curr){
      curr.forEach(function(elm) {
        if(!(elm in prev)) {
          prev.push(elm)
        }
      })
      return prev
    }, []).sort() 
    return all.filter(function (value, index, self) {
             return self.indexOf(value) === index;
    }) 
  }

module.exports = recurrent
