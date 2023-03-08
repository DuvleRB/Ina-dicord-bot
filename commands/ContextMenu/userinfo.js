const { ContextMenuCommandBuilder, ApplicationCommandType, Embed, EmbedBuilder } = require("discord.js");

module.exports = {
  data:new ContextMenuCommandBuilder()
  .setName("유저정보")
  .setType(ApplicationCommandType.User),
  /**
   * 
   * @param {import("discord.js").UserContextMenuCommandInteraction} interaction
   */
  async execute(interaction){
    await interaction.deferReply()
    const User  = interaction.targetUser;
    const embed = new EmbedBuilder()
    .setTitle(`**${User.tag}**\n`)
    .setColor(User.accentColor || "DarkPurple")
    .setThumbnail(`${User.displayAvatarURL({dynamic:true})}`)
    .addFields({name:"아이디",value:`${User.id}`},
    {name:"뱃지",value:`${User.flags.toArray().join(", ") || "없음"}`},
    );
    interaction.editReply({embeds:[embed]});
  },
};