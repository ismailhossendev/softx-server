const express = require('express');
const { getEmployees, createEmployee } = require('../controller/employee');
const router = express.Router();

router.get("/", getEmployees)
router.post("/", createEmployee)

module.exports = router;