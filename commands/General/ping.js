const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("핑")
    .setDescription("퐁!"),
  /**
   *
   * @param {import("discord.js").CommandInteraction} interaction
   */
  async execute(interaction) {
    await interaction.reply({ content: `퐁인거에요!` });
  },
};