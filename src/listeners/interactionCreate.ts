import {Client, CommandInteraction} from 'discord.js';
import {commands} from '../commands/main.commands';

export default (client: Client): void => {
  client.on('interactionCreate', async (interaction: any) => {
    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleSlashCommand(client, interaction);
    }
  });
};
const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
  const slashCommand = commands.find(c => c.name === interaction.commandName);
  if (!slashCommand) {
    await interaction.followUp({content: 'An error has occurred'});
    return;
  }
  await interaction.deferReply();
  slashCommand.run(client, interaction);
};
