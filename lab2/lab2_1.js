var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000)

//Create Landing Page
app.get('/', function(req, res)
{
    res.status(200);
    res.type('text/plain');
    res.send('Landing Page');
});

//Creating Custom 404 Page
app.use(function(req, res) 
{
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// a custom 500 page
app.use(function (err, req, res, next)
{
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});
app.listen(app.get('port'), function() {
    console.log('Express Started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.')
});