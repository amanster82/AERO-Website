$(document).ready(function() {

$('.ui.checkbox').checkbox();

$.fn.api.settings.api = {
  'newsletter create' : '/mail/create',
};

function submitform(event, fields) {
	console.log(fields);
};

// validation 
 $('.signup-form').form({
	on: 'blur', revalidate: true,
// 	onSuccess: submitform,
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

$('.signup-form .submit.button')
  .api({
	action: 'newsletter create',
	method: 'POST',
	serializeForm: true,
	beforeSend: function(settings) {
	  // open console to inspect object
		if ( !$('.signup-form').form('is valid') ) {
		  return false;
		}
	  console.log(settings.data);
	  return settings;
	}
  })
;

});