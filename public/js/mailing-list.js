$(document).ready(function() {

$.fn.api.settings.api = {
  'newsletter add' : '/mail/adduser',
  'newsletter login' : '/mail/login'
};

// Make checkboxes interactive
$('.ui.checkbox').checkbox();

// validation 
 $('.signup-form').form({
	on: 'blur', revalidate: true,
	fields: {
		email: {
		  identifier : 'email',
		  rules: [
			{
			  type   : 'email',
			  prompt : 'Please enter a valid email'
			}
		  ]
		},
		first: {
			identifier : 'first',
			rules: [{
				type: 'empty',
				prompt: 'Please enter a valid first name'
			}]
		},
		last: {
			identifier : 'last',
			rules: [{
				type: 'empty',
				prompt: 'Please enter a valid last name'
			}]
		}
}});

// Validation 
$.fn.form.settings.rules.validatePassword = function(value) {
	var success = false;
	$.ajax({
	    async : false,
	    url : "/mail/login",
	    type : "POST",
	    data : {
	        password: value
	    },
	    dataType: "json",
	    success: function(data){
	        success = data.success;
	        return data.success;
	    }
	});

	return success;
};


 $('.login-form').form({
	on: 'blur', revalidate: true,
	fields: {
		password: {
		  identifier : 'password',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Password field must not be left empty'
			},
			{
				type : 'validatePassword',
				prompt : 'Invalid password'
			}
		  ]
		}
	},
	onSuccess: function(event, fields) {
		setTimeout(function(){
			$(location).prop('href', 'http://www.uvicaero.com/mail/manage');
		}, 1000);
	}
});

// Add API action for newsletter signup
$('.signup-form .submit.button').api({
	action: 'newsletter add',
	method: 'POST',
	serializeForm: true,
	beforeSend: function(settings) {
		// Make sure form passed validation
		if ( !$('.signup-form').form('is valid') ) {
			return false;
		}

		return settings;
	}
});

$('.login-modal').modal('attach events', '.login-button', 'show');

});