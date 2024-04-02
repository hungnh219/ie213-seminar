const express = require('express');
const mongoose = require('mongoose');

// connect mongodb
require('dotenv').config();
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection

// import routes
const routes = require('./routes/routes')


// check if connection is success
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Db connected')
})

const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log('hung rat dep trai')
})

// use routes
app.use('/api', routes)
console.log('hehe')