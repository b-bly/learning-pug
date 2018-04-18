// require all dependencies
var express = require('express');
var app = express();
 
// Routes
app.get('/', function (req, res) {
 
    // render the 'index' template
    res.send('hello');
 
});
 
// start up the server
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
 