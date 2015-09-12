path = require('path')
express = require('express')
router = express.Router()

### GET mail page. ###

router.get '/', (req, res, next) ->
  res.sendFile path.resolve(__dirname + '/../mail/index.html')
  return
  
module.exports = router
