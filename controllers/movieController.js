const connection = require("../db/data")

function index(req,res){
    res.json({
        message:'OK'
    });
}
  module.exports={index}


