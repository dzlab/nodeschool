function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(u){
      return goodUsers.indexOf(u) != -1
    })
  }
}
module.exports = checkUsersValid
