var express = require('express');
var doctorsData = require('./doctors-data');

var app = express();

require('./doctors-service')(doctorsData, app);

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
	res.render('index');
});

doctorsData.connectDB('mongodb://dbuser:dbpassword@ds045001.mongolab.com:045001/medify4')
.then(function() { console.log("connected to remote mongodb") })
.then(doctorsData.resetDoctors)
.then(doctorsData.seedDoctors)
.then(function() { console.log("ready to serve...") });

console.log("server is up");
app.listen(7900);
