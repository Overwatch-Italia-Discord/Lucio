const Discord = require('discord.js');

module.exports = (client, message, queue) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#fa9c1e')
	.setDescription(`${client.emotes.error} **Non** ci sono più **canzoni** nella **coda**!`)
    message.channel.send(emb);
};