path = require('path')
express = require('express')
router = express.Router()
config = require('config')
mail = require('../mail/MailingList')()

### GET mail page. ###

router.get '/', (req, res, next) ->
  res.render path.resolve(__dirname + '/../mail/index'), config
  return

router.post '/adduser', (req, res) ->
  mail.addUser(req.body)
  res.json({success: true, message: "Added user to newsletter"})
  return

router.post '/login', (req, res) ->
  loginRes = mail.login(req.body.password)
  res.json({success: loginRes, message: "Authentication result"})
  return
  
module.exports = router
