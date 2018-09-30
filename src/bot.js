var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var httpService = requen('./src/service/http.js');

// Configure logger settings
logger.remove(logger.transports.Console, { colorize : true });
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.discord_token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            case 'top-headlines':
                //Get all top headlins from sources"
                bot.sendMessage({
                    to: channelID,
                    message: getTopHeadlines()
                });
            break;
            case 'technology':
                //Get all top headlins from sources"
                bot.sendMessage({
                    to: channelID,
                    message: getTechnologyHeadlines()
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});




