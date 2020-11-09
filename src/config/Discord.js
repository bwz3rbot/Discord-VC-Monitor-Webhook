// Require the one and only new Discord.Client()
const c = require('colors');
const dateFormat = require('dateformat');
const Discord = require('discord.js');
const client = new Discord.Client();

// On ready listener
let Webhooks = new Map();
client.on("ready", async () => {
    dateTime = dateFormat(new Date());
    await client.user.setUsername(process.env.SET_USERNAME);
    await client.user.setPresence({ // Set Presence
            activity: {
                type: process.env.ACTIVITY_TYPE,
                name: process.env.ACTIVITY_NAME
            },
            status: process.env.STATUS
        }) // Show Presence In Console
        .catch(console.error); // Log any errors
    console.log(`Successfully Connected as ${client.user.tag} | ${dateTime}`.green);
    const guild = client.guilds.cache.find(guild => guild.name === process.env.GUILD);
    console.log(`Successfully attached to guild: "${guild.name}"`.green);
    console.log(`Fetching guild webhooks....`.magenta);
    Webhooks = await guild.fetchWebhooks();
    console.log("Successfully fetched guild webhooks!".yellow);
    for(let [k,v] of Webhooks){
        console.log(v.name.green);
    }
});

// On Voice State Update
client.on('voiceStateUpdate', async (oldMember, newMember) => {
    const oldUserChannel = oldMember.channel;
    const newUserChannel = newMember.channel;

    let username;
    let avatarURL;
    let channelName;
    let message;
    if (newUserChannel != null) { // User joined channel    
        channelName = newUserChannel.name;
        username = newMember.member.user.username;
        avatarURL = `https://cdn.discordapp.com/avatars/${newMember.member.user.id}/${newMember.member.user.avatar}.png?size=128`;
        message = `${username} has joined ${channelName}!`;
        console.log(`"${username}" joined channel: "${channelName}"`.yellow);

    } else if (oldUserChannel != null) { // User left channel  
        channelName = oldUserChannel.name;
        avatarURL = `https://cdn.discordapp.com/avatars/${oldMember.member.user.id}/${oldMember.member.user.avatar}.png?size=128`;
        username = oldMember.member.user.username;
        message = `${username} has left ${channelName}!`;
        console.log(`"${username}" left channel: "${channelName}"`.yellow);
    }

    let webhookClient = Webhooks.find(webhook => webhook.name === channelName);
    try {
        webhookClient.send(message, {
            username,
            avatarURL
        });
        console.log("Webhook message successfully sent from client!".green);
    } catch (err) {
        if (err && webhookClient === undefined) {
            console.log(`${channelName} has not been set up to accept webhooks!`.red);
        }
    }
});

client.login(process.env.TOKEN)

