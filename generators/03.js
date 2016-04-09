function *flat(arr) {
  for(var i=0; i<arr.length; i++) {
  var e = arr[i]  
    if(Array.isArray(e)) {
      yield *flat(e)
    }else {
      yield e
    }
  }
}

var A = [1, [2, [3, 4], 5], 6]
for(var f of flat(A)) {
  console.log(f)
}
