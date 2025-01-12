const mysql = require('mysql2');

const connection = mysql.createConnection({
    user: 'root',
    database:'movies',
    host:'localhost',
    password:'password'
});

connection.connect((err)=>{
    if(err)throw err;
    console.log('mysql connesso!!');    
});
module.exports = connection;