/*
    Logger Bot
    schema.js
    Jacky Tea
    07/08/19
*/

//mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//message structure
const MessageSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
    msgCount: {
        type: Number,
        required: true
    }
});

//create collection and add schema
const msg = mongoose.model('messages', MessageSchema);

//export to other components
module.exports = msg;