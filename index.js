/*
    Logger Bot
    index.js
    Jacky Tea
    07/08/19
*/

//database componenets
const msg = require('./database/schema.js');
require("./database/database.js");

//create a new DiscordJS instance
const discord = require('discord.js');
const bot = new discord.Client();

//login to discord
bot.login(BOT_TOKEN);

//main
bot.on('message', (message) => {
    //make temp obj
    const theMsg = {
        user: message.member,
        channel: message.channel,
        msgCount: 1
    }

    //push to database
    new msg(theMsg).save();

    //reply results
    if (!message.author.bot) {
        msg.find({ user: message.member, channel: message.channel }).then((data) => {
            message.channel.send(message.member.displayName + " has sent " + (++data.length) + " messages in this channel: ( " + message.channel + " )!");
        });
    }
});