md = require 'marked'
md.setOptions(
    gfm: true
)
module.exports =
    club: require './club.coffee'
    layout: require './layout.coffee'
    sponsorUs: require './sponsor.coffee'
    about: require './about.coffee'
    currentExecs: require './currentExec.coffee'
    markdown: md
    sponsors: require './sponsors.coffee'
    contact: require './contact.coffee'
    joinPage: require './join.coffee'
