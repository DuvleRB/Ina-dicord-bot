const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("배워")
    .setDescription("이나봇에게 간단한 문답을 가르칠 수 있습니다."),
  /**
   *
   * @param {import("discord.js").CommandInteraction} interaction
   */
  async execute(interaction) {
    await interaction.reply({ content: `추가중인거에요...` });
  },
};