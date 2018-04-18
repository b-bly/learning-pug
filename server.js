// require all dependencies
var express = require('express');
var app = express();

// set up the template engine
app.engine('pug', require('pug').__express)
app.set('views', './views');
app.set('view engine', 'pug');
 
// Routes
app.get('/', function (req, res) {
 
    // render the 'index' template
    //res.send('hello');
    res.render('index');
});
 
// start up the server
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
 

//made with help from https://courses.ideate.cmu.edu/48-739/s2017/?page_id=177
