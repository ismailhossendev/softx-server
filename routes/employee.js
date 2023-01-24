const express = require('express');
const { getEmployees, createEmployee } = require('../controller/employee');
const router = express.Router();

const checkLogin = require('../middleware/checkLogin');

router.get("/", checkLogin, getEmployees)
router.post("/", createEmployee)

module.exports = router;