const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'password',
    name:'movies'
});

connection.connect((err)=>{
    if(err)throw err;
    console.log('mysql connesso!!');    
});
module.exports = connection;