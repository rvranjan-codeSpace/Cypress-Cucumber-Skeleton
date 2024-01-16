//desturcturing the student object from Student
const student = require("./Student")
require("dotenv").config()

const { name, age, discipline } = require("./Student")
console.log(student)
console.log(name)
console.log(process.env.LOGIN_ORANGE_HRM)