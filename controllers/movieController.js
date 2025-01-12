const connection = require("../db/data")

function index(req,res){

    const sql='SELECT id,title,director,genre,release_year FROM movies';

    connection.query(sql,(err,results)=>{
        console.log(results);
        res.json(results);
        
    })
    };

  
    function show(req, res) {
        const id = parseInt(req.params.id);
        const sqlPost = " SELECT id,title,director,genre,release_year FROM movies WHERE id= ?";
        connection.query(sqlPost, [id], (err, movieResults) => {
          
          const sqlReviews = `SELECT 
            reviews.name, 
            reviews.vote,
            reviews.text,  
            reviews.created_at,
            reviews.updated_at 
            FROM movies 
            INNER JOIN reviews 
            ON reviews.movie_id=movies.id 
            WHERE movies.id=?`;
          connection.query(sqlReviews, [id], (err, reviewsResults) => {
            const movie = {
              ...movieResults[0],
              reviews: reviewsResults,
            };
            res.json(movie);
          });
        });
    }
  module.exports={index,show}


