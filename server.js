const express = require('express');
require('dotenv').config();

const router = require('./routes');
const db = require('./config/mongoose');

const app = express();


app.use(express.json());

app.use('/',router);

const port = process.env.PORT || 8000;

app.listen(port,(err)=>{
    if(err){
        console.log('Error: ', err);
        return;
    }
    console.log(`Server is running on port ${port}...`);
});