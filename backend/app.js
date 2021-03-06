const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())

const mongoose = require("mongoose");

// MongoDB account data
require("dotenv").config();
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const cluster = process.env.CLUSTER;
const dbname = process.env.DBNAME;

// Connect to MongoDB
mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.tpfx3.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

// Check MongoDB connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const FilterRouter = require('./routes/filterRoute')
app.use(FilterRouter)


const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log(`Server started on port ${PORT}`);
});