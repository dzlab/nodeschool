function loadUsers(userIds, load, done) {
  var obj = {}
  userIds.forEach(function(element, index, array) {
    load(element, function(result) {
      obj[index] = result
    })
  })
  done(obj.values())
}

module.exports = loadUsers
