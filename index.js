require('dotenv').config();

const fs = require('fs');
const {Client, collection, Intents} = require('discord.js');

const token = process.env['QR_BOT_TOKEN'];
const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.commands = new collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require('./commands/${file}');

    client.commands.set(command.data.name, command);
}