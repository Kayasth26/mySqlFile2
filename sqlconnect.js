const mysql = require('mysql');
// Connection with Mysql
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: '2nd project'
});

db.connect((err) => {
    if(err)
        throw err;
    else
        console.log('MySqL Connected..');
})
module.exports = db;