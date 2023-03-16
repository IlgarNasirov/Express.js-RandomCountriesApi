const express=require('express');
require('dotenv').config();

const app=express();

const countriesRoutes=require('./routes/countries');

const errorController=require('./controllers/error');

app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/v1/countries', countriesRoutes);

app.use(errorController.get500);

app.use(errorController.get404);

app.listen(process.env.PORT||8000);