const express = require('express');
const app = express();
const mongoose = require("mongoose");
const tasks = require('./routes/tasks')
const PORT = 4000;
require('dotenv').config()

// middleware
app.use(express.static("./public"))
app.use(express.json())



// routes
app.use('/api/v1/tasks', tasks)


mongoose.connect(process.env.MONGO_URI)
        .then(()=> {
            console.log('connected to database');
        })
        .catch((error)=> console.log(error))


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});
