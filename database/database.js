/*
    Logger Bot
    database.js
    Jacky Tea
    07/08/19
*/

//mongoose module
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//connection string
const connectionString = "";

//connect to the database
mongoose.connect(connectionString).then((data) => {
    console.log("MongoDB Connected! Details: " + data);
}).catch((error) => {
    console.log("An error has occurred while connecting to the database: " + error);
});