const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    // hiring details
    jobTitle: {
        type: String,
        required: [true, 'Please enter a title'],
    },
    jobLocation: {
        type: String,
        required: [true, 'Please enter a location'],
    },
    experienceRequirements: {
        type: String,
        required: [true, 'Please enter a experience'],
    },
    jobType: {
        type: String,
        required: [true, 'Please enter a jobType'],
    },
    officeHour: {
        type: String,
        required: [true, 'Please enter a officeHour'],
    },
    salaryRange: {
        type: String,
        required: [true, 'Please enter a salary'],
    },
    jobDeadLine: {
        type: String,
        required: [true, 'Please enter a jobDeadLine'],
    },
    jobDetails: {
        type: String,
        required: [true, 'Please enter a jobDetails'],
    },
    responsibilities: {
        type: Array,
        required: [true, 'Please enter 1 or more responsibilities'],
    },
    requirements: {
        type: Array,
        required: [true, 'Please enter 1 or more requirements'],
    },
    otherFacilitiesAndBenefits: {
        type: Array,
    },
    openingDate: {
        type: Date,
        default: Date.now,
    },
    // applicant details
    requiredApplicantDetails: {
        type: Array,
        required: [true, 'Please enter 1 or more requireFields'],
    },
    optionalApplicantDetails: {
        type: Array,
    },
})

const job = mongoose.model('job', jobSchema);
module.exports = job;