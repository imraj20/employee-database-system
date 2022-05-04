const mongoose = require('mongoose');
let employeeScheme = new mongoose.Schema({
    name: String,
    emp: Number,
    gender: String,
    dob: String,
    highest_qualification: String,
    doj: String,
    department: String,
    total_experience: Number,
    designation: String,
    salary: Number
});

module.exports = mongoose.model('Employee', employeeScheme);