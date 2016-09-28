function getShortMessages(messages) {
  function islessthan50char(value) {
  return value.message.length < 50;
  }
  var filtered = messages.filter(islessthan50char);
  var returnMessage = filtered.map(function(num) {
    return num.message;
  });
return returnMessage;
}

module.exports = getShortMessages
