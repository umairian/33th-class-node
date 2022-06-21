const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const studentRouter = require('./routes/student');
app.use("/api/students", studentRouter);

mongoose.connect("mongo_db_connection_url").then(result => {
    console.log("Database connected");
}).catch(err => {
    console.log(err)
})

app.listen(4000);