const Sequelize = require('sequelize');
const db = require('./db');


const Student = db.define('student', {
    name: Sequelize.STRING
})

module.exports = {
    db,
    Student
}