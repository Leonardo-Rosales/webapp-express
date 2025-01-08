const mysql = require('mysql2')

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'P0q1p0Q1_',
    database: 'db_movies'
})

connection.connect((err) => {
    if (err) throw err

    console.log('Connect to MYSQL');

})

module.exports = connection