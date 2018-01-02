'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true
}));

app.post('/',function(req, res){
	console.log("bjnjk");
	console.log(req.body.id);
	console.log(number_max(req.body.id));
	//console.log(res.body);

});
function number_max(n){
request.get('http://terriblytinytales.com/test.txt', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
		            var csv = body;
		            /* Below is a regular expression that finds alphanumeric characters
					        Next is a string that could easily be replaced with a reference to a form control
					        Lastly, we have an array that will hold any words matching our pattern */
					     var pattern = /\w+/g,
					         string = csv,
					         matchedWords = string.match( pattern );

					     /* The Array.prototype.reduce method assists us in producing a single value from an
					        array. In this case, we're going to use it to output an object with results. */
					     var counts = matchedWords.reduce(function ( stats, word ) {

					         /* `stats` is the object that we'll be building up over time.
					            `word` is each individual entry in the `matchedWords` array */
					         if ( stats.hasOwnProperty( word ) ) {
					             /* `stats` already has an entry for the current `word`.
					                As a result, let's increment the count for that `word`. */
					             stats[ word ] = stats[ word ] + 1;
					         } else {
					             /* `stats` does not yet have an entry for the current `word`.
					                As a result, let's add a new entry, and set count to 1. */
					             stats[ word ] = 1;
					         }

					         /* Because we are building up `stats` over numerous iterations,
					            we need to return it for the next pass to modify it. */
					         return stats;

					     }, {} );

					     /* Now that `counts` has our object, we can log it. */
					    // console.log( counts );
	    }


							// Create items array
							var items = Object.keys(counts).map(function(key) {
							return [key, counts[key]];
						});

						// Sort the array based on the second element
						items.sort(function(first, second) {
							return second[1] - first[1];
			});

			// Create a new array with only the first 5 items
		 console.log(items.slice(0,n));

		 var a = new Array();
		 a = JSON.stringify(items.slice(0,n));
		var link = "njvknf/";
		var final = link +a;
		console.log(final);
		});
}

function callSend(operation){
        request_1.getAsync({
                url:operation,
                method: 'GET'
        }).then(function(res,err){
                var body = ''; // Will contain the final response
                if(err) throw err;
                if (res.body==='None')
                {
                        sendTextMessage(sender,"We are sorry but we currently do not serve in your area. Please try again later.")
                }
                else {
                        var link= "http://genii.ai/activebots/indiansaffronco/payment.html?userid="+sender;
                        sendButton(sender,["web_url"],'how would you like to pay?',[link],["Payments"],"tall");
                }

        });
}



var server = app.listen(process.env.PORT || 3000, function () {
        console.log("Listening on port %s", server.address().port);
});
