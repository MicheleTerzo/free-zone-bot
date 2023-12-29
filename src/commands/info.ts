import {CommandInterface} from '../interfaces/command.interface';
import {ApplicationCommandType, Client, CommandInteraction} from 'discord.js';

export const Info: CommandInterface = {
  name: 'info',
  description: 'Risponde con una info su questo bot',
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = 'Ciao, sono un bot in via di sviluppo';
    await interaction.followUp({
      ephemeral: true,
      content
    });
  }
};
