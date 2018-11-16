const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/classTime', {logging:false});

db.authenticate()
.then(() => {
    console.log('Database engaged!')
})

module.exports = db;