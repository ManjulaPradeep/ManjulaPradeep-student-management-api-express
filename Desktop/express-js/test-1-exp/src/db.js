const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testing_db_express_1',
    waitForConnections: 'true',
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;