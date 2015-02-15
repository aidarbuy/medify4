var mongoose = require('mongoose');

var doctorSchema = mongoose.Schema({
	name: String,
	description: String,
	imageURL: String
	// speciality: String,
	// services: Array,
	// xRayOnsite: Checkbox,
	// labsOnsite: Checkbox,
	// ultrasoundOnsite: Checkbox,
	// radiologyBackupReading: Checkbox,
	// location: String,
	// price: Array
});

mongoose.model('Doctor', doctorSchema);