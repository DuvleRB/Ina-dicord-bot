const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("잊어")
    .setDescription("이나봇에게 가르친 문답을 잊게합니다."),
  /**
   *
   * @param {import("discord.js").CommandInteraction} interaction
   */
  async execute(interaction) {
    await interaction.reply({ content: `추가중인거에요..` });
  },
};