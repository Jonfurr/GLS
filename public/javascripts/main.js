$(function () {

	function secretReminder() {
		var accountSid = process.env.TWILIO_ACCOUNT_SID; 
		var authToken =  process.env.TWILIO_AUTH_TOKEN;
		var client = require('twilio')(accountSid, authToken); 
		var moment = require('moment'); 
	    var updateCheck = 900000;
	    var rightNow = moment().format('h:mm a');
	    var updateSince = rightNow - updateCheck; 

	        $.ajax ({
	         type: "GET",
	         url: "/api/today",
	         dataType: "json",
	         data: { 
	            updateSince: updateSince
	          },
	         success: function(data, textStatus, jqXHR) {
	            // check for duplicates
	            for (var i = 0; i < data.length; i++) {
	               console.log('test')
	            }
	         }
	      });   
	}
	setInterval(secretReminder, 900000);
});