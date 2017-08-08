// DEPENDENCIES
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var PORT = 3000;

var app = express();
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var router = require('./controllers/entree_controller.js');
app.use('/', router);


app.listen(process.env.PORT || PORT);
console.log("Local host:" + PORT);