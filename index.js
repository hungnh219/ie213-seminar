const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}
// connect mongodb
require('dotenv').config();
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);

const database = mongoose.connection

// import routes
const { createDefaultUsers, router } = require('./routes/routes')

// import createDefaultUsers from routes

// check if connection is success
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', async () => {
    console.log('Db connected')
    await createDefaultUsers();
})

const app = express();
app.use(express.json())
app.use(cors(corsOptions))

app.listen(3000, () => {
})

// use routes
app.use('/api', router)