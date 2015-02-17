var express = require('express');
var doctorsData = require('./doctors-data');
var app = express();
require('./doctors-service')(doctorsData, app);

app
	.use(express.static(__dirname + '/public'))
	.set('views', __dirname)
	.set('view engine', 'jade')
	.get('*', function(req, res) {
	   res.render('index');
	});

doctorsData.connectDB('mongodb://dbuser:dbpassword@ds045001.mongolab.com:045001/medify4')
	.then(function() { console.log("Connected to remote mongodb") })
	.then(doctorsData.resetDoctors)
	.then(doctorsData.seedDoctors)
	.then(function() { console.log("Ready to serve...") });

var processEnvPort = process.env.PORT, processEnvIP = process.env.IP;
console.log("Listening on " + processEnvIP + ":" + processEnvPort);
app.listen(processEnvPort, processEnvIP);
