const dotenv = require('dotenv').config({path: 'config.env'});
const express = require('express');
const mongoConnect = require('./config/connect')


// const CarModel = require('./models/model');
const app = express();

app.use(express.json())
app.use('/', require('./routes/router'))

// MongoDB Connection
mongoConnect();

app.listen( process.env.PORT, () => {
    console.log(`Server starting on http://localhost:${process.env.PORT}`);
})