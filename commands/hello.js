const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Replies with pong!"),
  async execute(interaction) {
    await interaction.reply("pong");
  },
};
