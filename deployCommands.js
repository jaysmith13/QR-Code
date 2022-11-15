require('dotenv').config();

const fs = require('fs');
const token = process.env['QR_BOT_TOKEN'];
const clientId = process.env['CLIENT_ID'];
const guildId = process.env['GUILD_ID'];

const {SlashCommandBuilder} = require('@discordjs/builders');
const {REST} = ;
const {Routes} = ;