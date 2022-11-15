require('dotenv').config();

const fs = require('fs');
const {Client, collection, Intents} = require('discord.js');

const token = process.env['QR_BOT_TOKEN'];
const client = new Client({intents: [Intents.FLAGS.GUILDS]});

