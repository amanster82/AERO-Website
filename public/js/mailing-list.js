$(document).ready(function() {

$.fn.api.settings.api = {
  'newsletter add' : '/mail/adduser',
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

// Add API action for 
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

});