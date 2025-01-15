//INIT EXPRESS
const express = require ('express');
const app = express();
const cors =require('cors')


const{APP_HOST,APP_PORT}=process.env

var corsOptions={
   origin: 'http://localhost:5173',
   optionSuccessStatus:200
}



//MIDDLEWARES
app.use(express.json());
app.use(express.static('public'));
app.use(cors(corsOptions));
//ROUTER
const movieRouter = require('./routers/movieRouter')
app.use('/movies', movieRouter)

//ERROR HANDLERS
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')

app.use(errorHandler);
app.use(notFound);

//SERVER LISTENING
app.listen(APP_PORT,()=>{
    console.log(`server in ascolto su ${APP_HOST}:${APP_PORT}`)
})