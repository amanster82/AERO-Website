var api = require('sendwithus')('test_281d6ffb967cb3711393877c9d1e110359d56cd8');

function MailingList() {

	return {
		addUser: function(params) {
			console.log("Adding email " + params.email + " to mailing list");

			// General is a default group
			var groups = ["grp_j7xdyokgn6JCbMAXXJQf7Q"];

			if(params.software)
				groups.push("grp_WJBHAHW6AYyk4983oVigJE");
			if(params.embedded)
				groups.push("grp_he6kLn22u8Gds8jH4nbN4N");
			if(params.mechanical)
				groups.push("grp_jQAmoviyG8Uvz35R5Qbh9a");
			if(params.electrical)
				groups.push("grp_nimEAHRWYK7AfX2XZo63Ki");
			if(params.aeronautical)
				groups.push("grp_crbuENigDdcQkwXzSTYhhF");

			api.customersUpdateOrCreate({ email: params.email, data: { name: params.first + " " + params.last }, groups: groups }, function(err, data) {
				if(err) {
					console.log(err, err.statusCode);
				} else {
					console.log(data);
				}
			});
		}
	}
};

module.exports = MailingList;