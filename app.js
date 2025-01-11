//INIT EXPRESS
const express = require ('express');
const app = express();
const{APP_HOST,APP_PORT}=process.env

//MIDDLEWARES
app.use(express.json());
app.use(express.static('public'));

//ROUTER
const movieRouter = require('./routers/movieRouter.js')
app.use('/movies',movieRouter)

//ERROR HANDLERS
const notFound = require('./middlewares/notFound.js')
const errorHandler = require('./middlewares/errorHandler.js')

app.use(errorHandler);
app.use(notFound);

//SERVER LISTENING
app.listen(APP_PORT,()=>{
    console.log(`server in ascolto su ${APP_HOST}:${APP_PORT}`)
})