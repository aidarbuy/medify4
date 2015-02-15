var mongoose = require('mongoose');
var doctorsData = require('../../doctors-data');
var expect = require('chai').expect;
var Promise = require('bluebird');

describe("db save doctors", function () {

	var doctors;

	before(function (done) {
		doctorsData.connectDB('mongodb://localhost/medify4')
		.then(doctorsData.resetDoctors)
		.then(doctorsData.seedDoctors)
		.then(doctorsData.findDoctors)
		.then(function (collection) {
			doctors = collection;
			done();
		});
	});

	after(function () {
		mongoose.connection.close();
	});

	it("should not be empty since doctors are seeded", function () {
		expect(doctors.length).to.be.at.least(1);
	});

	it("should have a doctor with a name", function () {
		expect(doctors[0].name).to.not.be.empty;
	});

	it("should have a doctor with a description", function () {
		expect(doctors[0].name).to.not.be.empty;
	});

});

describe("db get doctors", function () {
	after(function () {
		mongoose.connection.close();
	});
});
