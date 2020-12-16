const Discord = require('discord.js');

module.exports = (client, message, query) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#fa9c1e')
	.setDescription(`${client.emotes.error} Non ho trovato niente su YouTube cercando **${query}**!`)
    message.channel.send(emb);
};