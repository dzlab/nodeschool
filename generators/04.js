function *upper(items) {
  for(item of items) {
    var uppercase
    try {
      uppercase = item.toUpperCase()
    } catch(e) {
      uppercase = null
    }
    yield uppercase
  }
}

var bad_items = ['a', 'B', 1, 'c']

for(var item of upper(bad_items)) {
  console.log(item)
}
