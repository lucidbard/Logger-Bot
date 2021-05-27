/*
    Logger Bot
    database.js
    Jacky Tea
    07/08/19
*/

//mongoose module
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'gaim-bot';      // REPLACE WITH YOUR DB NAME

//connection string
const connectionString = `mongodb://${server}/${database}`;

//connect to the database
mongoose.connect(connectionString).then((data) => {
    console.log("MongoDB Connected! Details: " + data);
}).catch((error) => {
    console.log("An error has occurred while connecting to the database: " + error);
});