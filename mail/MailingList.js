function MailingList() {

	return {
		addUser: function(params) {
			console.log("Adding email " + params.email + " to mailing list");
		}
	}
};

module.exports = MailingList;