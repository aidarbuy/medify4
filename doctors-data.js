var mongoose = require('mongoose');
var Promise = require('bluebird');
var doctorModel = require('./models/Doctor');
var doctorsSeed = require('./doctors-seed');

var Doctor = mongoose.model('Doctor');

var findDoctors = function (query) {
	return Promise.cast(Doctor.find(query).exec());
};

var createDoctor = Promise.promisify(Doctor.create, Doctor);

// exports

exports.findDoctors = findDoctors;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

exports.saveDoctor = createDoctor;

exports.resetDoctors = function () {
	return new Promise(function (resolve, reject) {
		mongoose.connection.collections['doctors'].drop(resolve, reject);
		console.log("doctors collection was reset");
	});
};

exports.seedDoctors = function () {
	return findDoctors({}).then(function (collection) {
			if (collection.length === 0) {
				return Promise.map(doctorsSeed, function (doctor) {
					console.log(doctor.name + " is seeded!");
					return createDoctor(doctor);
				});
			}
	});
};
