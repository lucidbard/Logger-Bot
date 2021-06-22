/*
    Logger Bot
    index.js
    Jacky Tea
    07/08/19
*/

//database componenets
const msg = require('./database/schema.js');
require("./database/database.js");
require('dotenv').config()

//create a new DiscordJS instance
const discord = require('discord.js');
const bot = new discord.Client();

//login to discord
bot.login(process.env.BOT_TOKEN);

//main
bot.on('message', (message) => {
    console.log(message)
    let user, guild;
    if (message.type === 'GUILD_MEMBER_JOIN') {
        console.log("Guild member joined")
        return;
    }
    if (message.user == null) {
        guild = message.channel.id
        user = message.author.username + "#" + message.author.discriminator;
    } else {
        guild = message.guild.id
        user = message.user.username + "#" + message.user.discriminator
    }
    //make temp obj

    const theMsg = {
        user: user,
        channel: message.channel,
        content: message.content,
        createdTimestamp: message.createdTimestamp,
        guild: guild,
        msgCount: 1
    }

    //push to database
    new msg(theMsg).save();

    //reply results
    if (!message.author.bot) {
        msg.find({ user: message.member, channel: message.channel }).then((data) => {
            // message.channel.send(message.member.displayName + " has sent " + (++data.length) + " messages in this channel: ( " + message.channel + " )!");
        });
    }
});