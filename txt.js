'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
var http = require('http');
var Promise = require("bluebird");
var request_1 = Promise.promisifyAll(require("request"));

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',function(req, res){
  var result;
  number_max(req.query.id).then(fun => {
    result = fun
    result=JSON.stringify(result);
    res.writeHead(res.statusCode);
    res.write(result);
    res.end();
  })
});

function number_max(operation){
        return request_1.getAsync({
                url:'http://terriblytinytales.com/test.txt',
                method: 'GET'
        }).then(function(response,err){
                var body = ''; // Will contain the final response
                if(err) throw err;
              //  console.log(res);
                if (!err && response.statusCode == 200) {
                         var csv = response.body;
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
                                   As a result, let's increment the count for that `word`.*/
                                stats[ word ] = stats[ word ] + 1;
                            } else {
                                /* `stats` does not yet have an entry for the current `word`.
                                   As a result, let's add a new entry, and set count to 1.*/
                                stats[ word ] = 1;
                            }

                            /* Because we are building up `stats` over numerous iterations,
                               we need to return it for the next pass to modify it.*/
                            return stats;

                        }, {} );

                        /* Now that `counts` has our object, we can log it.*/
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
             // console.log(items.slice(0,n));
              var a = new Array();
              a = JSON.stringify(items.slice(0,operation));
              return a;
             });

        }



var server = app.listen(process.env.PORT || 3000, function () {
        console.log("Listening on port %s", server.address().port);
});
