app = module.parent.exports.app;

/* require your controllers here */
var siteController = require('./controllers/site');

/* Put routes here */

// main site routes
app.get('/', siteController.index);