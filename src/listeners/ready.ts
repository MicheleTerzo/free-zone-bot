import {Client} from 'discord.js';
import {commands} from '../commands/main.commands';

export default (client: Client): void => {
  client.once('ready', async (readyClient) => {
    if (!client.user || !client.application) {
      return;
    }
    await client.application.commands.set(commands);
    console.log(`${client.user.username} is online`);
  });
};
