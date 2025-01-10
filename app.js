const express = require ('express');

const app = express();

const{APP_HOST,APP_PORT}=process.env

app.get("/",(req,res)=>{
    res.json({
       meassage:"OK" 
    });
})

app.listen(APP_PORT,()=>{
    console.log(`server in ascolto su ${APP_HOST}:${APP_PORT}`)
})