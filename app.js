//////////////////////
//Define the Express app
//////////////////////
var express = require('express'),
    cons = require('consolidate'),
    swig = require('swig'),
    http = require('http'),
    path = require('path'),
    app = module.exports = express();
    
    
//////////////////////
// Configuration
//////////////////////
app.configure(function(){
    app.engine('.html', cons.swig);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.set('view options', { layout: false });
    app.set('view cache', false);
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});


//////////////////////
// Swig Settings
//////////////////////
swig.init({
    root: __dirname + '/views',
    allowErrors: true // allows errors to be thrown and caught by express instead of suppressed by Swig
});


//////////////////////
//Run the server
//////////////////////
app.listen(1337);
console.log('Application Started on http://localhost:1337/');


module.exports.app = app;
routes = require('./routes');