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


















/*
//meme array
var memeData = ["http://i0.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg",
    "https://ci.memecdn.com/4605386.jpg",
    "https://steamuserimages-a.akamaihd.net/ugc/45367008771161471/D4B6EE72459A941379ECA0DC2E7295EA6C8C9944/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C637%3A358&composite-to=*,*%7C637%3A358&background-color=black",
    "https://coubsecure-s.akamaihd.net/get/b15/p/coub/simple/cw_timeline_pic/a799e8fbe52/1991af9167782db654cdb/big_1467465102_image.jpg",
    "https://i.imgur.com/wmgyOWj.jpg", "https://i.ytimg.com/vi/uN9ZS_7rV60/maxresdefault.jpg",
    "https://i.pinimg.com/736x/56/e5/3b/56e53bd754deedf4254a8172e0f7d580--funny-dog-faces-mike-crapo.jpg",
    "https://i.ytimg.com/vi/FreV-974exc/maxresdefault.jpg",
    "http://i0.kym-cdn.com/entries/icons/original/000/021/311/free.jpg",
    "http://i0.kym-cdn.com/entries/icons/original/000/019/601/smilelaugh.jpg",
    "http://i0.kym-cdn.com/entries/icons/mobile/000/025/067/ugandanknuck.jpg",
    "http://i0.kym-cdn.com/entries/icons/original/000/017/051/copy_that.jpg",
    "https://i.ytimg.com/vi/6fPliInHYnE/maxresdefault.jpg",
    "https://i.ytimg.com/vi/JbCw6iQjADg/maxresdefault.jpg",
    "https://biographyspy.com/wp-content/uploads/2017/11/Filthy-Frank-Age-Height-Wiki-Family-Net-Worth.jpeg",
    "https://2static2.fjcdn.com/comments/Its+filthy+frank++_e4d46d5df8ebcf76d4e08ba0807accb5.jpg",
    "http://t3.rbxcdn.com/3cb7ef4d2e136d2537bd12dc24951917",
    "https://news.nationalgeographic.com/content/dam/news/2016/05/29/gorilladeath/01-gorilla-harambe-death.jpg",
    "https://i.pinimg.com/originals/a4/a7/69/a4a769fecc9a16bddb3d5a0fe40fa913.jpg",
    "https://i.ytimg.com/vi/RNA7ekOSyCo/maxresdefault.jpg",
    "https://i.pinimg.com/originals/38/9c/2f/389c2ffbe24945a8d4fb82eac6003ab5.jpg",
    "http://i0.kym-cdn.com/photos/images/facebook/000/993/875/084.png",
    "https://qph.fs.quoracdn.net/main-qimg-0bd77e610a5716a169ec533bd5606066-c",
    "http://i0.kym-cdn.com/photos/images/facebook/001/282/845/093.jpg",
    "https://i.chzbgr.com/full/7740653312/hACEB3EC9/",
    "http://i0.kym-cdn.com/photos/images/newsfeed/000/820/444/f64.gif",
    "http://i0.kym-cdn.com/photos/images/newsfeed/000/820/444/f64.gif",
    "https://media1.tenor.com/images/060083c5375e2cd2e40484509b356a73/tenor.gif?itemid=10591361",
    "https://i.imgur.com/IY33Jcd.gif",
    "http://i0.kym-cdn.com/entries/icons/original/000/025/580/Screen_Shot_2018-03-01_at_12.59.37_PM.png",
    "https://i.imgur.com/jFjVBXe.png",
    "https://i.imgur.com/SQUhP5T.gif",
    "https://i5.walmartimages.com/asr/e6d2676b-18f3-4a59-bf36-0f9491ad0de0_1.e57c77c1f893ed4c4570a2b6384b17aa.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    "https://i.ytimg.com/vi/D-ocpUcUl84/maxresdefault.jpg",
    "http://cdn.playbuzz.com/cdn//4dc87168-08ef-4b08-8d9b-ee21fdca2fac/4f982825-38ee-409a-9951-2e1abb1a9cc1.jpg",
    "http://i0.kym-cdn.com/photos/images/original/001/314/682/271.png",
    "https://media1.tenor.com/images/8fc73996441d88934f8d479df2c24e31/tenor.gif?itemid=4973488",
    "https://i.guim.co.uk/img/media/0a5f59d149d984985581a2bf99fd140f13629644/0_144_3888_2333/master/3888.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=67c3be56e3dbc03aaa6dff2954425758",
    "https://www.dailydot.com/wp-content/uploads/a6c/bd/9e97b6e822b91264de22281a5d89904e.jpg",
    "http://i0.kym-cdn.com/photos/images/original/001/293/670/b7d.jpg",
    "https://ih0.redbubble.net/image.483897331.4189/flat,800x800,075,f.u7.jpg",
    "https://memegenerator.net/img/images/16842614.jpg",
    "https://78.media.tumblr.com/cd4bfdfaace513b4047299c1a7e9ba8e/tumblr_nw3118p6VS1r3mglvo1_500.png",
    "https://pbs.twimg.com/media/DdPKWt3WkAAmAbq.jpg",
    "https://ubistatic19-a.akamaihd.net/resource/en-ca/game/rainbow6/siege-v3/r6-operators-list-fuze_317267.png",
    "https://i.kym-cdn.com/photos/images/newsfeed/000/483/928/fb0.jpg",
    "https://i.kym-cdn.com/photos/images/original/000/989/341/81c.jpg",
    "https://i.chzbgr.com/original/5809413/h184437FB/",
    "https://i.kym-cdn.com/entries/icons/original/000/026/008/Screen_Shot_2018-04-25_at_12.24.22_PM.png",
    "http://media.tumblr.com/tumblr_m3zzhzwnVK1qisovz.gif",
    "https://i.kym-cdn.com/photos/images/newsfeed/000/676/735/9f6.png",
    "http://66.media.tumblr.com/9a758ed4172169e954fa9c9606c6bfbd/tumblr_o7eozm3MWa1uedkeno3_1280.gif"];
    */

    //colour array
/*
var colourData = ["https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-yellow-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-bright-green-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-office-green-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-navy-blue-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-violet-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-russian-violet-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-flamingo-pink-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-bright-lavender-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-white-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-dark-brown-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-gray-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-turquoise-green-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-magenta-process-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-cyan-solid-color-background.jpg",
    "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-peach-orange-solid-color-background.jpg"];
    */

/*
//respond to certain message
bot.on('message', (message) => {
if (message.toString().toLowerCase() == "colour" || message.toString().toLowerCase() == "color" ||
    message.toString().toLowerCase() == "colours" || message.toString().toLowerCase() == "colors") {
    //message.reply("No more memes today....   :(");
    message.channel.send({ files: [colourData[Math.floor(Math.random() * (colourData.length))]] });
} else if (message.toString().toLowerCase() == "red") {
    message.channel.send({ files: [colourData[0]] });
} else if (message.toString().toLowerCase() == "orange") {
    message.channel.send({ files: [colourData[1]] });
} else if (message.toString().toLowerCase() == "yellow") {
    message.channel.send({ files: [colourData[2]] });
} else if (message.toString().toLowerCase() == "lime") {
    message.channel.send({ files: [colourData[3]] });
} else if (message.toString().toLowerCase() == "green") {
    message.channel.send({ files: [colourData[4]] });
} else if (message.toString().toLowerCase() == "blue") {
    message.channel.send({ files: [colourData[5]] });
} else if (message.toString().toLowerCase() == "violet") {
    message.channel.send({ files: [colourData[6]] });
} else if (message.toString().toLowerCase() == "purple") {
    message.channel.send({ files: [colourData[7]] });
} else if (message.toString().toLowerCase() == "pink") {
    message.channel.send({ files: [colourData[8]] });
} else if (message.toString().toLowerCase() == "lavender") {
    message.channel.send({ files: [colourData[9]] });
} else if (message.toString().toLowerCase() == "white") {
    message.channel.send({ files: [colourData[10]] });
} else if (message.toString().toLowerCase() == "black") {
    message.channel.send({ files: [colourData[11]] });
} else if (message.toString().toLowerCase() == "brown") {
    message.channel.send({ files: [colourData[12]] });
} else if (message.toString().toLowerCase() == "gray" || message.toString().toLowerCase() == "grey") {
    message.channel.send({ files: [colourData[13]] });
} else if (message.toString().toLowerCase() == "turquoise") {
    message.channel.send({ files: [colourData[14]] });
} else if (message.toString().toLowerCase() == "magenta") {
    message.channel.send({ files: [colourData[15]] });
} else if (message.toString().toLowerCase() == "cyan") {
    message.channel.send({ files: [colourData[16]] });
} else if (message.toString().toLowerCase() == "peach") {
    message.channel.send({ files: [colourData[17]] });
}
});
*/

/*
var ranks = ["https://www.gameskinshop.com/wp-content/uploads/2017/09/unranked.png", "https://mobalytics.gg/wp-content/uploads/2016/04/bronze.png", "http://mobalytics.gg/wp-content/uploads/2016/04/Silver.png", "http://mobalytics.gg/wp-content/uploads/2016/04/Gold.png", "http://mobalytics.gg/wp-content/uploads/2016/04/Platinum.png", "http://mobalytics.gg/wp-content/uploads/2016/04/Diamond.png", "https://www.metasrc.com/assets/images/ranks/legacy/master.png", "http://static.lolskill.net/img/tiers/192/challengerI.png"];

bot.on('message', (message) => {
    if (message.toString().toLowerCase() == "rank") {
        //message.reply("No more memes today....   :(");
        message.channel.send({ files: [ranks[Math.floor(Math.random() * (ranks.length))]] });
    } else if (message.toString().toLowerCase() == "unranked") {
        message.channel.send({ files: [ranks[0]] });
    } else if (message.toString().toLowerCase() == "bronze") {
        message.channel.send({ files: [ranks[1]] });
    } else if (message.toString().toLowerCase() == "silver") {
        message.channel.send({ files: [ranks[2]] });
    } else if (message.toString().toLowerCase() == "gold") {
        message.channel.send({ files: [ranks[3]] });
    } else if (message.toString().toLowerCase() == "platinum") {
        message.channel.send({ files: [ranks[4]] });
    } else if (message.toString().toLowerCase() == "diamond") {
        message.channel.send({ files: [ranks[5]] });
    } else if (message.toString().toLowerCase() == "master") {
        message.channel.send({ files: [ranks[6]] });
    } else if (message.toString().toLowerCase() == "challenger") {
        message.channel.send({ files: [ranks[5]] });
    }
});
*/
