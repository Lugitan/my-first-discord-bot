const Discord = require ('discord.io');
const auth = require('./auth.json');
const client = new Discord.Client({
    token: auth.token,
    autorun: true
});

client.on('ready',() => {
    console.log ("I\'m online\nI\'m Online");
})

client.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                client.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});