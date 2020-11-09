# Discord 3 Strike Warning System

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
    - [Prerequisites](#getting_started)
    - [Inviting The Bot To Your Server](#invite)
    - [Granting Permissions](#perms)
    - [Environment Variables](#env_var)
    - [Installing](#installing)
- [Running](#running)

# About <a name = "about"></a>

This Discord bot uses the __Webhook__ functionality to watch over the voice channels in your server and post to a coresponding text channel with updates of who has joined/left the voice channels.

# Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine.

# Prerequisites <a name = "pres"></a>


This project runs on Node.js. You'll need to download and install it before moving on.


https://nodejs.org/en/download/

Run this command to check that node has been correctly installed:
```javascript
node --version
> v12.18.3
```



-----
\
The first step in installing and using a bot is creating an application in the [Discord Developer Portal](https://discord.com/developers/applications).

<br>

1. Click the `New Application` button to create a new bot.

<img src="https://i.imgur.com/RS7HNEk.png">

<br>
<br>

2. Give it a name and click `Create`

<img src="https://i.imgur.com/n0lJjsW.png">

<br>
<br>

3. Navigate to the Bot tab and click to `Add Bot`.

<img src="https://i.imgur.com/N3L6bln.png">

<br>
<br>

4. Now `Click to Reveal Token`. You'll need to paste this token into your pw.env file (which will be explained later on in this guide).

<img src='https://i.imgur.com/X115w03.png'>
<br>

<br>
<br>

__Never share this token with anyone! It is used to authenticate your bot! It is your bot's password.__ Anyone with access to this token will have *full* control over the bot. That means that if you have granted the bot an admin role on your server (which you would need to in order for it to work), __anyone with access to your token will have admin rights on your server__. If you ever happen to lose your token, you may go back to the [Developer Portal](https://discord.com/developers/applications) on your bot's page and click the button to _regenerate_ a new one. Paste it into your `pw.env` file and you'll be good to go!

# Inviting The Bot To Your Server <a name="invite"></a>
Follow these instructions on how to format your invite link: https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links

You'll find your client id back in the Developer Portal under the __General Information__ tab.
Once you have your invite link, you can simply paste it into the browser and invite the bot to your server.

Your invite link should look something like this:
```javascript
https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot
```

# Granting Permissions <a name="perms"></a>
Once you've invited the bot to your server, create a new role that is to be granted to the bot.

__The following permissions are requried to run:__

- __Manage Webhooks__ :heavy_check_mark:
- __Read Text Channels & See Voice Channels__ :heavy_check_mark:
- __Send Messages__ :heavy_check_mark:


# Environment Variables <a name = "env_var"></a>

This bot is ***highly customizable***
-----
The environment variables listed below are stored in your __pw.env__ file. You will notice a single file that exists within the root directory of this codebase called __pw.envEXAMPLE.__ Here is where you can customize your bot. The only requirements are that you input the correct token for your bot and ACTIVITY_TYPE is limited to only 3 choices. Besides those limitations, you have a number of variables to choose from to make the bot fit your server's personality. See below for definitions of what they all mean.

-----

__TOKEN__ Taken from the [Developer Portal](https://discord.com/developers/applications) when you created your app.\
__SET_USERNAME__ The username you wish your bot to display.\
__ACTIVITY_TYPE__ Must be set to either PLAYING, LISTENING 
or WATCHING for the bot to function correctly as defined [here](https://discord.js.org/#/docs/main/stable/typedef/ActivityType). This bot __does not allow__ for a user to use the STREAMING or CUSTOM_STATUS activity types.\
__ACTIVITY_NAME__ Displays along with the activity type.\

__STATUS__ The status the bot wil display. Either set to 'dnd', 'idle', 'invisible', or 'online'.\
__GUILD__ The guild the bot should fetch existing webhooks from.

_____
### Below is an example of how you should fill out your environment variables.

This exact file can be found within the root directory and is called __pw.envEXAMPLE__. By filling in your token here, you are allowing the code to connect to discord under your bots' credentials. By removing EXAMPLE from the end of the filename, the application will know where to find the file and will use the variables you have set in it to log in and run the bot. If any of these variables are filled out incorrectly, the application may throw an error and stop executing. Be sure you have followed all the instructions carefully and then fill in these fields:

```javascript
TOKEN='12345kfajewhjfa'
SET_USERNAME="VC🤖"
ACTIVITY_TYPE="WATCHING"
ACTIVITY_NAME="voice channels."
STATUS='idle'
GUILD='Bingo!Bango!Botto!'
```

# Installing <a name = "installing"></a>


Once Node has been installed, you have your application created in the [Discord Developer's Portal](https://discord.com/developers/applications), the bot is invited to your server and granted a role with the correct permissions, download the bot's source code. Fill in your environment variables as explained above.

Before running the app, you need to use npm to install packages required to run a Discord bot in JavaScript.

To do so, first you must open your terminal, and `cd` into the folder containing the bot. Now run this command from the root folder:
```javascript
npm install
```

This command will install all the nececary dependencies as defined in the `package.json` file.

Once these packages are completely installed, you will be only one step away from running your bot.

# Running <a name = "running"></a>

Now that you've generated a token for a new app, your environment variables have bet set, and you've installed the dependencies, you are ready to run the bot!

To run the bot, simply use this command:
```javascript
node src/app.js
```

On success, you should see a message that looks exactly like this one:
```javascript
Successfully Connected as VC�#5943 | Sun Nov 08 2020 18:41:58
Successfully attached to guild: "Bingo!Bango!Botto!"
Fetching guild webhooks....
Successfully fetched guild webhooks!
Nappy-Tube 
Game Chat  
Admin Voice
```