$(document).ready(function() {

$('.ui.checkbox').checkbox();

function submitform(event, fields) {
	console.log(fields);
};

// validation 
 $('.signup-form').form({
 	on: 'blur', revalidate: true,
 	onSuccess: submitform,
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

});