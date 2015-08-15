md = require 'marked'
console.log()
module.exports =
    club: require './club.coffee'
    layout: require './layout.coffee'
    sponsorus: require './sponsor.coffee'
    about: require './about.coffee'
    currentExecs: require './currentExec.coffee'
    markdown: md
    sponsors: require './sponsors.coffee'
    contact: require './contact.coffee'
