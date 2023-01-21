const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
    },
    phone: {
        type: String,
        required: [true, 'Please enter a phone number'],
    },
    location: {
        type: String,
        required: [true, 'Please enter a location'],
    },
    position: {
        type: String,
        required: [true, 'Please enter a position'],
    },
    department: {
        type: String,
        required: [true, 'Please enter a department'],
    },
    status: {
        type: String,
        required: [true, 'Please enter a status'],
    },
    salary: {
        type: String,
        required: [true, 'Please enter a salary'],
    },
    date: {
        type: Date,
        default: Date.now,
    },

    image: {
        type: String,
        required: [true, 'Please enter an image url'],
    },
    username: {
        type: String,
        required: [true, 'Please enter a username'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },

});

const employee = mongoose.model('employee', employeeSchema);

module.exports = employee;
