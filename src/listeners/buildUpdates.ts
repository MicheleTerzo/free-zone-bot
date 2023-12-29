import {ChannelType, Client, Message, TextChannel, ThreadChannel} from 'discord.js';

export default (client: Client): void => {
  client.on('messageCreate', async (message) => {
    if (!check(message)) {
      return;
    }
    await handleUpdates(client, message);
  });
};

function check(message: Message): boolean {
  if (message.author.bot) {
    return false;
  }
  if (message.channel.type !== ChannelType.PublicThread) {
    return false;
  }
  const threadChannelsId = ['1183811029042479114', '1175853397992296468'];
  if (!message.channel.parentId || !threadChannelsId.includes(message.channel.parentId)) {
    return false;
  }
  return true;
}

async function handleUpdates(client: Client, message: Message): Promise<void> {
  const threadChannel = await client.channels.fetch(message.channelId) as ThreadChannel | null;
  const codChatChannelId = '985201378391629864';
  const textChannel = await client.channels.fetch(codChatChannelId) as TextChannel | null;
  textChannel?.send(`${message.author.displayName} ha aggiunto una nuova build per: _**${threadChannel?.name}**_ dentro _**${threadChannel?.parent?.name}**_`);
}
