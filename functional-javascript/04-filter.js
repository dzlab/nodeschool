function getShortMessages(messages) {
  return messages.filter(function(o) {return o.message.length <50;}).map(function(o){return o.message})
}
module.exports = getShortMessages
