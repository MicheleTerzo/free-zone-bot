//permission integer 19095693294832
import {Client, GatewayIntentBits} from 'discord.js';
import {token} from '../config.json';
import ready from './listeners/ready';
import interactionCreate from './listeners/interactionCreate';
import buildUpdates from './listeners/buildUpdates';

console.log('Bot is starting...');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});
ready(client);
interactionCreate(client);
buildUpdates(client);
client.login(token);
