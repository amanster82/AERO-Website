# might need to find a better place for this
keepAlive = (mins) ->
  http = require('http')
  SITE = "uvicaero.com"
  mins = if mins then mins else 30
  if !SITE
    return
  # get rid of whitespace
  SITE = SITE.trim()
  setInterval (->
    dateObj = new Date
    date = dateObj.toLocaleDateString()
    time = dateObj.toTimeString().replace(RegExp(' .+'), '')
    http.get 'http://www.' + SITE
    return
  ), 60000 * mins
  return

module.exports = keepAlive
