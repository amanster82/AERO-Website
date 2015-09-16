api = require('sendwithus')('live_8d9dcb3ecde9976ee174500c3eeb483aef47e7fe')
# API Key

MailingList = ->
  {
    addUser: (params) ->
      if params.email == undefined or params.first == undefined or params.last == undefined
        return

      console.log 'Adding email ' + params.email + ' to mailing list'

      # General is a default group
      groups = [ 'grp_j7xdyokgn6JCbMAXXJQf7Q' ]
      if params.software
        groups.push 'grp_WJBHAHW6AYyk4983oVigJE'
      if params.embedded
        groups.push 'grp_he6kLn22u8Gds8jH4nbN4N'
      if params.mechanical
        groups.push 'grp_jQAmoviyG8Uvz35R5Qbh9a'
      if params.electrical
        groups.push 'grp_nimEAHRWYK7AfX2XZo63Ki'
      if params.aeronautical
        groups.push 'grp_crbuENigDdcQkwXzSTYhhF'

      # Register user
      api.customersUpdateOrCreate {
        email: params.email
        data: name: params.first + ' ' + params.last
        groups: groups
      }, (err, data) ->
        if err
          console.log err, err.statusCode
        return

      # Send confirmation email
      api.send {
        email_id: 'tem_ZAjqgehhq8wfGvy79FB7hm' # Confirmation email template
        recipient: { address: params.email }
        email_data: { first_name: params.first }
        esp_account: 'esp_qDukE87bsaDNVXjV8ASUMn' # From president@uvicaero.com
      }, (err, data) ->
        if err
          console.log err, err.statusCode
        return

      return
    login: (password) ->
      password != undefined and password == 'aerob150exec'

  }

module.exports = MailingList

# ---
# generated by js2coffee 2.1.0