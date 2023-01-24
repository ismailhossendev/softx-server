const employeeModel = require('../models/employee');
const bcrypt = require('bcrypt');

const getEmployees = async (req, res) => {
    try {
        const employees = await employeeModel.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const createEmployee = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const employee = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        location: req.body.location,
        position: req.body.position,
        department: req.body.department,
        status: req.body.status,
        salary: req.body.salary,
        image: req.body.image,
        username: req.body.username,
        password: hashedPassword,
        role: req.body.role
    }

    const newEmployee = new employeeModel(employee);
    try {
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(409).json({ message: error.message.slice(error.message.indexOf(': ') + 2) });
    }
}

module.exports = {
    getEmployees,
    createEmployee
}