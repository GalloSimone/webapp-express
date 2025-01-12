const connection = require("../db/data")

function index(req,res){

    const sql='SELECT id,title,director,genre,release_year FROM movies';

    connection.query(sql,(err,results)=>{
        console.log(results);
        res.json(results);
        
    })
    };

  module.exports={index}


