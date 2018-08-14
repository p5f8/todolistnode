var express = require("express"),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Task = require('./api/models/todolistModel'),
	bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbdoido');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todolistRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);


app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found.'});
});

